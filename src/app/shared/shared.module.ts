import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterInnerComponent } from './components/footer-inner/footer-inner.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FooterInnerComponent,
  ],
  exports: [
    FooterInnerComponent,
  ],
})
export class SharedModule { }
