import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { SkillData } from './skill-chart.model';
import * as d3 from 'd3';
import * as d3Cloud from 'd3-cloud';
import { WPVector } from '@app/shared/utils/vector';

const FONT_SIZE_MULTIPLIER = .15;

interface SkillWord extends d3Cloud.Word, SkillData {}

@Component({
  selector: 'wp-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.scss'],
})
export class SkillChartComponent implements OnInit {

  @Input() skills: SkillData[];

  @ViewChild('skillChart') private skillChartEl: ElementRef;

  private size: WPVector;
  private graphic: d3.Selection<SVGElement, {}, HTMLElement, any>;

  @HostListener('window:resize')
  onResize() {
    this.start();
  }

  ngOnInit() {
    this.start();
  }

  private start(): void {
    this.measureSize();
    this.initView();

    this.render([]);
    this.layout(this.render.bind(this));
  }

  private measureSize(): void {
    this.size = new WPVector(
      this.skillChartEl.nativeElement.clientWidth,
      this.skillChartEl.nativeElement.clientHeight,
    );
  }

  private layout(onEnd: () => void): void {
    const maxFontSize = Math.min(this.size.x, this.size.y) * FONT_SIZE_MULTIPLIER;
    const layout = d3Cloud()
      .size([this.size.x, this.size.y])
      .words(this.skills.map((d: SkillData) => {
        return Object.assign({}, d, { text: d.name, size: d.proficiency * maxFontSize }) as SkillWord;
      }))
      .rotate(() => this.randomRotation())
      .font('Rubik')
      .fontSize((d: SkillWord) => d.size)
      .on('end', onEnd);

    layout.start();
  }

  private initView() {
    d3.select('#wp-skill-chart').selectAll('g').remove();

    this.graphic = d3.select('#wp-skill-chart').append('g')
      .attr('transform', `translate(${this.size.x / 2},${this.size.y / 2})`);
  }

  private render(words: SkillWord[]) {
    const text = this.graphic.selectAll('text')
      .data(words);

    text.enter().append('text')
      .style('font-size', (d: SkillWord) => `${d.size}px`)
      .style('font-family', 'Rubik')
      .attr('text-anchor', 'middle')
      .attr('fill', (_, i: number) => d3.schemeCategory10[i % d3.schemeCategory10.length])
      .text((d: SkillWord) => d.text)
      .attr('transform', () => `translate(${[(Math.random() - 0.5) * this.size.x, (Math.random() - 0.5) * this.size.y]})rotate(${this.randomRotation()})`)
      .transition()
      .duration(1000)
      .attr('transform', (d: SkillWord) => `translate(${[d.x, d.y]})rotate(${d.rotate})`)

    text.exit().remove();
  }

  private randomRotation(): number {
    return ((Math.random() * 4) - 2) * 30;
  }

}
