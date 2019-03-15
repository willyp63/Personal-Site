import { Component } from '@angular/core';
import { SkillChartData } from '@app/shared/components/skill-chart/skill-chart.model';

@Component({
  selector: 'wp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  readonly skillChartData: SkillChartData = {
    skills: [
      {
        name: 'CSS',
        proficiency: 80,
      },
      {
        name: 'HTML',
        proficiency: 90,
      },
      {
        name: 'React',
        proficiency: 70,
      },
      {
        name: 'Javascript',
        proficiency: 80,
      },
      {
        name: 'Angular',
        proficiency: 70,
      },
      {
        name: 'Node.js',
        proficiency: 50,
      },
      {
        name: 'Ruby/Rails',
        proficiency: 40,
      },
      {
        name: 'Mock Skill 0',
        proficiency: Math.floor(Math.random() * 40) + 61,
      },
      {
        name: 'Mock Skill 1',
        proficiency: Math.floor(Math.random() * 40) + 61,
      },
      {
        name: 'Mock Skill 2',
        proficiency: Math.floor(Math.random() * 40) + 61,
      },
    ],
  };

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
