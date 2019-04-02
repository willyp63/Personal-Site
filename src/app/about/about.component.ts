import { Component } from '@angular/core';
import { SkillData } from '@app/shared/components/skill-chart/skill-chart.model';

@Component({
  selector: 'wp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  readonly skills: SkillData[] = [
    {
      name: 'CSS',
      proficiency: .8,
    },
    {
      name: 'HTML',
      proficiency: .9,
    },
    {
      name: 'React',
      proficiency: .7,
    },
    {
      name: 'Javascript',
      proficiency: .8,
    },
    {
      name: 'Angular',
      proficiency: .7,
    },
    {
      name: 'Node.js',
      proficiency: .5,
    },
    {
      name: 'Ruby/Rails',
      proficiency: .4,
    },
    {
      name: 'Mock Skill 0',
      proficiency: Math.random(),
    },
    {
      name: 'Mock Skill 1',
      proficiency: Math.random(),
    },
    {
      name: 'Mock Skill 2',
      proficiency: Math.random(),
    },
  ];

}
