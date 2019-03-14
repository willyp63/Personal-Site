import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
