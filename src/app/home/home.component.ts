import { Component } from '@angular/core';
import { NavBarColorsAllWhite } from '@app/nav-bar/nav-bar-color.model';

@Component({
  selector: 'wp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly navBarColors = NavBarColorsAllWhite;
}
