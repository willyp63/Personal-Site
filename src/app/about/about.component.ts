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
      radius: 0,
    },
    {
      name: 'HTML',
      proficiency: .9,
      radius: 0,
    },
    {
      name: 'React',
      proficiency: .7,
      radius: 0,
    },
    {
      name: 'Javascript',
      proficiency: .8,
      radius: 0,
    },
    {
      name: 'Angular',
      proficiency: .7,
      radius: 0,
    },
    {
      name: 'Node.js',
      proficiency: .5,
      radius: 0,
    },
    {
      name: 'Ruby/Rails',
      proficiency: .4,
      radius: 0,
    },
    {
      name: 'Mock Skill 0',
      proficiency: Math.random(),
      radius: 0,
    },
    {
      name: 'Mock Skill 1',
      proficiency: Math.random(),
      radius: 0,
    },
    {
      name: 'Mock Skill 2',
      proficiency: Math.random(),
      radius: 0,
    },
  ];

  readonly noteItems = [
    {
      title: 'Fast',
      text: 'Fast load times and lag free interaction, my highest priority.',
    },
    {
      title: 'Responsive',
      text: 'My layouts will work on any device, big or small.',
    },
    {
      title: 'Intuitive',
      text: 'Strong preference for easy to use, intuitive UX/UI.',
    },
    {
      title: 'Dynamic',
      text: 'Websites don\'t have to be static, I love making pages come to life.',
    },
  ];

}
