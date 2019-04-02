import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { SkillData } from './skill-chart.model';
import * as d3 from 'd3';
import * as d3Cloud from 'd3-cloud';
import { WPVector } from '@app/shared/utils/vector';

const FONT_SIZE_MULTIPLIER = .3;

@Component({
  selector: 'wp-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.scss'],
})
export class SkillChartComponent implements OnInit {

  @Input() skills: SkillData[];

  @ViewChild('skillChart') private skillChartEl: ElementRef;

  private size: WPVector;

  ngOnInit() {
    this.size = new WPVector(
      this.skillChartEl.nativeElement.clientWidth,
      this.skillChartEl.nativeElement.clientHeight,
    );
    const maxFontSize = Math.min(this.size.x, this.size.y) * FONT_SIZE_MULTIPLIER;

    const layout = d3Cloud()
      .size([this.size.x, this.size.y])
      .words(this.skills.map((d: SkillData) => {
        return { text: d.name, size: d.proficiency * maxFontSize } as d3Cloud.Word;
      }))
      .padding(5)
      .font('Impact')
      .fontSize((d: d3Cloud.Word) => d.size)
      .on('end', this.render.bind(this));

    layout.start();
  }

  private render(words: d3Cloud.Word[]) {
    console.log(words);

    d3.select('#wp-skill-chart')
      .append('g')
        .attr('transform', `translate(${this.size.x / 2},${this.size.y / 2})`)
      .selectAll('text')
        .data(words)
      .enter().append('text')
        .style('font-size', (d: d3Cloud.Word) => `${d.size}px`)
        .style('font-family', 'Impact')
        .attr('text-anchor', 'middle')
        .attr('transform', (d: d3Cloud.Word) => `translate(${[d.x, d.y]})rotate(${d.rotate})`)
        .text((d: d3Cloud.Word) => d.text);
  }

}
