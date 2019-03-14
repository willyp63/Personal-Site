import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AppRoutingModule } from '@app/app-routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [
    NavBarComponent,
    NavMenuComponent,
  ],
  exports: [
    NavBarComponent,
  ],
})
export class NavBarModule { }
