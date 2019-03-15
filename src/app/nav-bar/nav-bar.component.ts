import { Component, HostListener, Input } from '@angular/core';
import { NavBarColorInterface, NavBarColorsAllBlack } from './nav-bar-color.model';
import { whiteColor } from '@app/shared/utils/colors';

@Component({
  selector: 'wp-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Input() colors: NavBarColorInterface[] = NavBarColorsAllBlack;

  currentColor = this.getCurrentColor();
  isMenuOpen = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.calcCurrentColor();
  }

  openMenu(): void {
    this.isMenuOpen = true;
    window.document.body.style.overflow = 'hidden';
    this.calcCurrentColor();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    window.document.body.style.overflow = 'auto';
    this.calcCurrentColor();
  }

  private calcCurrentColor(): void {
    this.currentColor = this.getCurrentColor();
  }

  private getCurrentColor(): string {
    if (this.isMenuOpen) {
      return whiteColor;
    }

    let currentColor = this.colors[0];
    for (let i = 1; i < this.colors.length; i++) {
      if (window.scrollY >= this.colors[i].minScrollY) {
        currentColor = this.colors[i];
      } else {
        break;
      }
    }
    return currentColor.hex;
  }
}
