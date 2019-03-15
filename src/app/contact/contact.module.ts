import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { AppLayoutModule } from '@app/app-layout/app-layout.module';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
  ],
  declarations: [
    ContactComponent,
  ],
  exports: [
    ContactComponent,
  ],
})
export class ContactModule { }
