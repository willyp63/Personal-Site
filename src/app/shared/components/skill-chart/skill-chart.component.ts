import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SkillData } from './skill-chart.model';
import * as d3 from 'd3';
import { WPVector } from '@app/shared/utils/vector';

const MAX_RADIUS = 80;

@Component({
  selector: 'wp-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.scss'],
})
export class SkillChartComponent implements OnInit {

  @Input() skills: SkillData[];

  @ViewChild('skillChart') private skillChartEl: ElementRef;

  ngOnInit() {
    this.size = new WPVector(
      this.skillChartEl.nativeElement.clientWidth,
      this.skillChartEl.nativeElement.clientHeight,
    );

    this.skills.forEach(skill => {
      skill.x = Math.random() * this.size.x;
      skill.y = Math.random() * this.size.y;
      skill.radius = this.getRadius(skill);
    });

    this.simulation = d3.forceSimulation(this.skills)
      .velocityDecay(0.1)
      .force('centerX', d3.forceX(this.size.x / 2))
      .force('centerY', d3.forceY(this.size.y / 2))
      .force('collision', d3.forceCollide((d: SkillData) => d.radius).iterations(3))
      .on('tick', () => {
        this.render();
      });
  }

  private size = new WPVector(0, 0);
  private simulation: d3.Simulation<SkillData, undefined>;

  private getRadius(node: SkillData) {
    return node.proficiency * MAX_RADIUS;
  }

  private render() {
    const selection = d3.select('svg.wp-skill-chart').selectAll('g').data(this.skills);

    const enter = selection.join('g')
      .attr('transform', (d: SkillData) => `translate(${d.x - d.radius / 2}, ${d.y - d.radius / 2})`);

    enter
      .append('circle')
      .attr('r', (d: SkillData) => d.radius)
      .attr('fill', (d: SkillData) => d3.schemeCategory10[d.index % 10]);

    enter
      .append('text')
      .text((d: SkillData) => d.name)
      .attr('dx', -20)
      .attr('dy', 8);
  }

}
