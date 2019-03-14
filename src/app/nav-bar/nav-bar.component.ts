import { Component, ViewChild, HostListener } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
  selector: 'wp-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @ViewChild(NavMenuComponent) menu: NavMenuComponent;

  isMenuOpen: boolean = false;
  isDark: boolean = true;

  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY >= window.innerHeight) {
      this.isDark = false;
    } else {
      this.isDark = true;
    }
  }

  openMenu() {
    this.isMenuOpen = true;
    window.document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.isMenuOpen = false;
    window.document.body.style.overflow = 'auto';
  }
}
