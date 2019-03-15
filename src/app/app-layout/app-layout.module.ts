import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import { NavBarModule } from '@app/nav-bar/nav-bar.module';
import { FooterModule } from '@app/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    NavBarModule,
    FooterModule,
  ],
  declarations: [
    AppLayoutComponent,
  ],
  exports: [
    AppLayoutComponent,
  ],
})
export class AppLayoutModule { }
