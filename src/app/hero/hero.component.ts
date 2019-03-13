import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  public readonly imgUrl = '/assets/images/heroes/baker-beach.jpg';

  constructor() { }

  ngOnInit() {
  }

}
