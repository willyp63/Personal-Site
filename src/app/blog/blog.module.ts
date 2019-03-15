import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { AppLayoutModule } from '@app/app-layout/app-layout.module';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
  ],
  declarations: [
    BlogComponent,
  ],
  exports: [
    BlogComponent,
  ],
})
export class BlogModule { }
