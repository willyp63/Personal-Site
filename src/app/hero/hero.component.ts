import { Component, Input } from '@angular/core';

@Component({
  selector: 'wp-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() public imgUrl: string;
}
