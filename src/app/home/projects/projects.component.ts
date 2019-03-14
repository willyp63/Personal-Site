import { Component, OnInit } from '@angular/core';
import { randomColor } from '@app/shared/utils/colors';

@Component({
  selector: 'wp-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  readonly projects = [
    {
      name: 'Project 1',
      imgUrl: '/assets/images/foo.jpg',
      color: randomColor(),
    },
    {
      name: 'Project 1',
      imgUrl: '/assets/images/foo.jpg',
      color: randomColor(),
    },
    {
      name: 'Project 1',
      imgUrl: '/assets/images/foo.jpg',
      color: randomColor(),
    },
    {
      name: 'Project 1',
      imgUrl: '/assets/images/foo.jpg',
      color: randomColor(),
    },
    {
      name: 'Project 1',
      imgUrl: '/assets/images/foo.jpg',
      color: randomColor(),
    },
    {
      name: 'Project 1',
      imgUrl: '/assets/images/foo.jpg',
      color: randomColor(),
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
