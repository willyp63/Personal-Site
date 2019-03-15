import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from '@app/shared/shared.module';
import { AppLayoutModule } from '@app/app-layout/app-layout.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppLayoutModule,
  ],
  declarations: [
    AboutComponent,
  ],
  exports: [
    AboutComponent,
  ],
})
export class AboutModule { }
