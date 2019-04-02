import { Component, Input } from '@angular/core';

@Component({
  selector: 'wp-footer-inner',
  templateUrl: './footer-inner.component.html',
  styleUrls: ['./footer-inner.component.scss']
})
export class FooterInnerComponent {
  @Input() inverseColors: boolean = false;

  readonly links = [
    {
      icon: 'file',
      href: '/assets/resumes/resume.pdf',
      isExternal: true,
    },
    {
      icon: 'mail',
      href: '/contact',
    },
    {
      icon: 'github',
      href: 'https://github.com/willyp63',
      isExternal: true,
    },
    {
      icon: 'linkedin',
      href: 'https://www.linkedin.com/in/wilpirino/',
      isExternal: true,
    },
  ];
}
