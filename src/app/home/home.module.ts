import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '@app/shared/shared.module';
import { AppLayoutModule } from '@app/app-layout/app-layout.module';
import { RoutingModule } from '@app/routes/routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppLayoutModule,
    RoutingModule,
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
