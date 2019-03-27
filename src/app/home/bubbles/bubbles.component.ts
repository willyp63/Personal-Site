import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { WPVector } from '@app/shared/utils/vector';
import { WPBubbleNode, WPBubbleNodeFactory, WPBubbleMachine } from './bubble';
import * as d3 from 'd3';
import { VELOCITY_DECAY, FLOAT_FORCE_MAGNITUDE, ROOM_PADDING, BUBBLE_MAX_AGE, POPPED_BUBBLE_FADE_RATE, POPPED_BUBBLE_GROW_RATE, CURSOR_PUSH_STRENGTH, CURSOR_PUSH_MAX_DIST } from './constants';
import { gravityForce, ceilingForce, leftWallForce, rightWallForce } from './forces';

@Component({
  selector: 'wp-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss']
})
export class BubblesComponent implements OnInit {

  stop() {
    if (!this.simulation) { return; }
    this.simulation.stop();
    this.bubbleNodes.splice(0, this.bubbleNodes.length);
    this.poppedBubbleNodes.splice(0, this.poppedBubbleNodes.length);
  }

  restart() {
    if (!this.simulation) { return; }
    this.simulation.restart();
  }

  ngOnInit() {
    this.measureBubblesElSize();
    this.initSimulation();
    this.renderSimulation();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const mouseLocation = new WPVector(event.clientX, event.clientY);

    for (let i = 0; i < this.bubbleNodes.length; i++) {
      const bubbleNode = this.bubbleNodes[i];
      if (mouseLocation.approxDistanceTo(new WPVector(bubbleNode.x, bubbleNode.y)) < bubbleNode.radius) {
        bubbleNode.age = BUBBLE_MAX_AGE;
      }
    }
  }

  @HostListener('window:resize')
  onresize() { this.measureBubblesElSize(); }

  @ViewChild('bubbles') private bubblesEl: ElementRef;
  private bubblesElSize = new WPVector(0, 0);
  private bubblesElSizeGetter: () => WPVector;

  private simulation: d3.Simulation<WPBubbleNode, undefined>;
  private bubbleNodes: WPBubbleNode[] = [];
  private poppedBubbleNodes: WPBubbleNode[] = [];
  private cursorNode: WPBubbleNode = WPBubbleNodeFactory.cursor();
  private repelNode: WPBubbleNode = WPBubbleNodeFactory.repel();
  private bubbleMachine: WPBubbleMachine;

  private get allNodes() { return this.bubbleNodes.concat([this.cursorNode, this.repelNode]); }
  private get visibleNodes() { return this.bubbleNodes.concat(this.poppedBubbleNodes); }

  private lastTickTime = Date.now();

  private measureBubblesElSize() {
    this.bubblesElSize = new WPVector(
      window.innerWidth,
      window.innerHeight,
    );
    console.log(this.bubblesElSize);
    this.bubblesElSizeGetter = () => this.bubblesElSize;

    this.repelNode.fx = this.bubblesElSize.x / 2;
    this.repelNode.fy = this.bubblesElSize.y / 2;
  }

  private initSimulation() {
    this.bubbleMachine = new WPBubbleMachine(this.bubbleNodes, this.bubblesElSizeGetter);

    this.simulation = d3.forceSimulation(this.allNodes)
      .alphaDecay(0)
      .velocityDecay(VELOCITY_DECAY)
      .force('gravity', gravityForce(this.bubbleNodes, FLOAT_FORCE_MAGNITUDE))
      .force('ceiling', ceilingForce(this.bubbleNodes, this.bubblesElSizeGetter, ROOM_PADDING))
      .force('leftWall', leftWallForce(this.bubbleNodes, this.bubblesElSizeGetter, ROOM_PADDING))
      .force('rightWall', rightWallForce(this.bubbleNodes, this.bubblesElSizeGetter, ROOM_PADDING))
      .force('collision', d3.forceCollide((d: WPBubbleNode) => d.radius).iterations(3))
      .force('repel', d3.forceManyBody().strength((d: WPBubbleNode) => d.isRepel ? -CURSOR_PUSH_STRENGTH : 0).distanceMax(CURSOR_PUSH_MAX_DIST))
      .on('tick', () => {
        this.ageNodes();
        this.removeOldNodes();
        this.updatePoppedBubbles();
        this.bubbleMachine.tick();

        this.updateSimulationNodes();
        this.renderSimulation();

        this.logFPS();
      });
      
  }

  private ageNodes() {
    this.bubbleNodes.forEach(node => node.age++);
  }

  private removeOldNodes() {
    for(let i = 0; i < this.bubbleNodes.length; i++) {
      if (this.bubbleNodes[i].age >= BUBBLE_MAX_AGE) {
        this.bubbleNodes[i].popped = true;
        this.poppedBubbleNodes.push(this.bubbleNodes[i]);
        setTimeout(() => this.poppedBubbleNodes.shift(), 100);

        this.bubbleNodes.splice(i--, 1);
      }
    }
  }

  private updatePoppedBubbles() {
    this.poppedBubbleNodes.forEach(node => node.radius += node.initialRadius * POPPED_BUBBLE_GROW_RATE);
    this.poppedBubbleNodes.forEach(node => node.opacity -= node.initialOpacity * POPPED_BUBBLE_FADE_RATE);
  }

  private updateSimulationNodes() {
    this.simulation.nodes(this.allNodes);
  }

  private renderSimulation() {
    d3.select('svg.wp-bubbles')
      .selectAll('circle')
      .data(this.visibleNodes, function() { return this['index']; })
      .join('circle')
      .attr('transition', 'r 500ms')
      .attr('r', (d: WPBubbleNode) => d.radius)
      .attr('cx', (d: WPBubbleNode) => d.x)
      .attr('cy', (d: WPBubbleNode) => d.y)
      .attr('opacity', (d: WPBubbleNode) => d.opacity);
  }

  private logFPS() {
    const nowTime = Date.now();
    const timeElapsed = nowTime - this.lastTickTime;
    this.lastTickTime = nowTime;

    console.log(`FPS: ${Math.round(1000 / timeElapsed)}`);
  }

}
