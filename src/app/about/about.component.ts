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
      proficiency: .9,
    },
    {
      name: 'HTML',
      proficiency: .9,
    },
    {
      name: 'Javascript',
      proficiency: .9,
    },
    {
      name: 'React',
      proficiency: .7,
    },
    {
      name: 'Angular',
      proficiency: .7,
    },
    {
      name: 'Vue',
      proficiency: .3,
    },
    {
      name: 'Node.js',
      proficiency: .9,
    },
    {
      name: 'Ruby on Rails',
      proficiency: .4,
    },
    {
      name: 'SQL',
      proficiency: .6,
    },
    {
      name: 'PostgreSQL',
      proficiency: .5,
    },
    {
      name: 'JQuery',
      proficiency: .7,
    },
    {
      name: 'D3.js',
      proficiency: .4,
    },
    {
      name: 'C',
      proficiency: .4,
    },
    {
      name: 'Objective-C',
      proficiency: .4,
    },
    {
      name: 'Swift',
      proficiency: .5,
    },
    {
      name: 'Java',
      proficiency: .6,
    },
    {
      name: 'C#',
      proficiency: .3,
    },
    {
      name: 'Angular Dart',
      proficiency: .5,
    },
    {
      name: 'Unity',
      proficiency: .3,
    },
    {
      name: 'Express.js',
      proficiency: .6,
    },
    {
      name: 'Nest.js',
      proficiency: .3,
    },
    {
      name: 'GraphQL',
      proficiency: .6,
    },
    {
      name: 'RXJS',
      proficiency: .6,
    },
    {
      name: 'NGRX',
      proficiency: .7,
    },
    {
      name: 'Flux/Redux',
      proficiency: .8,
    },
  ];

}
