import { Component, ViewChild } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
  selector: 'wp-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @ViewChild(NavMenuComponent) menu: NavMenuComponent;

  isMenuOpen = false;

  openMenu() {
    this.isMenuOpen = true;
    window.document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.isMenuOpen = false;
    window.document.body.style.overflow = 'auto';
  }
}
