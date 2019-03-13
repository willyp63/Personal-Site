import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public readonly heroImgUrl = '/assets/images/heroes/baker-beach.jpg';

  constructor() { }

  ngOnInit() {
  }

}
