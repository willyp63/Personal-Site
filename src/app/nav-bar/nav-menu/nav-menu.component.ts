import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { wpAnimationTicks } from '@app/shared/animations/constants';
import { BubblesComponent } from './bubbles/bubbles.component';

@Component({
  selector: 'wp-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        'opacity': 1,
        'transform': 'scale(1)',
      })),
      state('closed', style({
        'opacity': 0,
        'transform': 'scale(0.9)',
      })),
      transition('closed => open', [
        animate(wpAnimationTicks(1 / 3)),
      ]),
    ]),
  ]
})
export class NavMenuComponent {
  @ViewChild(BubblesComponent) bubbles: BubblesComponent;

  @Input()
  set isOpen(isOpen: boolean) {
    this._isOpen = isOpen;

    isOpen ? this.bubbles.restart() : this.bubbles.stop();
  }

  get isOpen() { return this._isOpen; }

  private _isOpen = false;

  @Output() shouldClose: EventEmitter<void> = new EventEmitter<void>();

  readonly mainLinks = [
    {
      text: 'HOME',
      href: '/',
    },
    {
      text: 'ABOUT',
      href: '/about',
    },
    {
      text: 'PROJECTS',
      href: '/projects',
    },
    {
      text: 'BLOG',
      href: '/blog',
    },
  ];

  readonly secondaryLinks = [
    {
      text: 'RESUME',
      href: '/assets/resumes/resume.pdf',
      isAsset: true,
    },
    {
      text: 'CONTACT',
      href: '/contact',
    },
  ];
}
