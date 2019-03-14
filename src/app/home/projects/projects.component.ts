import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  readonly projects = [
    {
      name: 'Fat Bat',
      skills: ['Objective-C'],
      imgUrl: '/assets/images/projects/fatbat.jpg',
      liveLink: 'www.soundsscape.com',
      sourceCodeLink: 'https://github.com/willyp63/SoundScape',
    },
    {
      name: 'Worm',
      skills: ['Pure Javascript'],
      imgUrl: '/assets/images/projects/worm.jpg',
      liveLink: 'https://willyp63.github.io/',
      sourceCodeLink: 'https://github.com/willyp63/worm',
    },
    {
      name: 'SoundScape',
      skills: ['React', 'Ruby on Rails'],
      imgUrl: '/assets/images/projects/soundscape.jpg',
      liveLink: 'https://itunes.apple.com/us/app/fat-bat-colored-caverns/id1078060795',
      sourceCodeLink: 'https://github.com/willyp63/Fat_Bat',
    },
    {
      name: 'Mock Project 0',
      skills: ['IDK'],
      imgUrl: '/assets/images/projects/mock-project-0.jpg',
      liveLink: 'https://willyp63.github.io/',
      sourceCodeLink: 'https://github.com/willyp63',
    },
    {
      name: 'Mock Project 1',
      skills: ['IDK'],
      imgUrl: '/assets/images/projects/mock-project-1.jpg',
      liveLink: 'https://willyp63.github.io/',
      sourceCodeLink: 'https://github.com/willyp63',
    },
    {
      name: 'Mock Project 2',
      skills: ['IDK'],
      imgUrl: '/assets/images/projects/mock-project-2.jpg',
      liveLink: 'https://willyp63.github.io/',
      sourceCodeLink: 'https://github.com/willyp63',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
