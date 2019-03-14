import { Component, OnInit, Input } from '@angular/core';
import { SkillChartData } from './skill-chart.model';

@Component({
  selector: 'wp-skill-chart',
  templateUrl: './skill-chart.component.html',
  styleUrls: ['./skill-chart.component.scss'],
})
export class SkillChartComponent implements OnInit {

  @Input() data: SkillChartData;

  constructor() { }

  ngOnInit() {
  }

}
