import { Component, Input } from '@angular/core';

@Component({
  selector: 'wp-footer-inner',
  templateUrl: './footer-inner.component.html',
  styleUrls: ['./footer-inner.component.scss']
})
export class FooterInnerComponent {
  @Input() inverseColors: boolean = false;
}
