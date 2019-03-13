import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { wpAnimationTicks } from '@app/shared/animations/constants';

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
        'transform': 'scale(0.85)',
      })),
      transition('closed => open', [
        animate(wpAnimationTicks(1 / 3)),
      ]),
    ]),
  ]
})
export class NavMenuComponent {
  @Input() isOpen: boolean = false;
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
      text: 'RESUME',
      href: '/resume',
    },
    {
      text: 'CONTACT',
      href: '/contact',
    },
  ];
}
