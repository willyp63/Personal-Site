import { Component, OnInit, ViewChild, ElementRef, HostListener, ChangeDetectionStrategy, Host } from '@angular/core';
import * as d3 from 'd3';

interface MyNode extends d3.SimulationNodeDatum {
  radius: number;
  age: number;
  color: string;
}

@Component({
  selector: 'wp-d3-playground',
  templateUrl: './d3-playground.component.html',
  styleUrls: ['./d3-playground.component.scss']
})
export class D3PlaygroundComponent implements OnInit {

  public rootNode: MyNode = { radius: 0, age: 0, color: '' };
  public visibleNodes: MyNode[] = [];
  public colors = d3.schemeCategory10;
  public simulation: d3.Simulation<MyNode, undefined>;

  public width: number;
  public height: number;

  private readonly gravityForce = () => {
    this.visibleNodes.forEach(node => {
      node.vy += 1;
    });
  };

  private readonly bounceForce = () => {
    this.visibleNodes.forEach(node => {
      const nodeNextY = node.y + node.vy;
      if (nodeNextY + node.radius >= this.height) {
        if (node.vy >= 4) {
          node.vy *= -1;
          node.y = this.height * 2 - nodeNextY - node.radius;
        } else {
          node.vy = 0;
          node.y = this.height - node.radius;
        }
      }
    });
  };

  @ViewChild('svg') svgEl: ElementRef;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.rootNode.fx = event.clientX;
    this.rootNode.fy = event.clientY;
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.createNewNode(event.clientX, event.clientY);
  }

  @HostListener('window:resize')
  onresize() {
    this.measureSVG();
  }

  ngOnInit() {
    this.measureSVG();
    this.initNodes();
    this.initSimulation();
    this.render();
  }

  private measureSVG() {
    this.width = this.svgEl.nativeElement.clientWidth;
    this.height = this.svgEl.nativeElement.clientHeight;
  }

  private initSimulation() {
    this.simulation = d3.forceSimulation([])
      .alphaDecay(0)
      .velocityDecay(0.05)
      .force('gravity', this.gravityForce)
      .force('bounce', this.bounceForce)
      .force('collision', d3.forceCollide((d: MyNode) => d.radius).iterations(1))
      //.force('repelRoot', d3.forceManyBody().strength((_, i: number) => i ? 0 : -8000))
      .on('tick', () => {
        this.removeOldNodes();
        this.updateSimulationNodes();
        this.render();
      });
    
    this.updateSimulationNodes();
  }

  private removeOldNodes() {
    for(let i = 0; i < this.visibleNodes.length; i++) {
      this.visibleNodes[i].age++;

      if (this.visibleNodes[i].age >= 400) {
        console.log(this.visibleNodes.splice(i--, 1));
      }
    }
  }

  private createNewNode(x: number, y: number) {
    this.visibleNodes.push({ radius: Math.random() * 24 + 6, age: 0, x, y, color: this.colors[Math.floor(Math.random() * 10)] });
  }

  private initNodes() {
    this.visibleNodes.forEach((d: MyNode) => {
      d.x = Math.random() * this.width;
      d.y = 0;
    });
  }

  private render() {
    d3.select('#d3-playground')
      .selectAll('circle')
      .data(this.visibleNodes, function() { return this['index']; })
      .join('circle')
      .attr('r', (d: MyNode) => d.radius)
      .attr('cx', (d: MyNode) => d.x)
      .attr('cy', (d: MyNode) => d.y)
      .style('fill', (d: MyNode) => d.color);
  }

  private updateSimulationNodes() {
    this.simulation.nodes(this.visibleNodes.concat([this.rootNode]));
  }

}
