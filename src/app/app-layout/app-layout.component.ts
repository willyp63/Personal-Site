import { Component, Input } from '@angular/core';
import { NavBarColorInterface, NavBarColorsAllBlack } from '@app/nav-bar/nav-bar-color.model';

@Component({
  selector: 'wp-app-layout',
  templateUrl: './app-layout.component.html',
  styles: [],
})
export class AppLayoutComponent {
  @Input() navBarColors: NavBarColorInterface[] = NavBarColorsAllBlack;
  @Input() showFooter = true;
}
