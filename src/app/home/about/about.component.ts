import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
