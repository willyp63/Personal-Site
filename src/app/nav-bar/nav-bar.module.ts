import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RoutingModule } from '@app/routes/routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule,
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
