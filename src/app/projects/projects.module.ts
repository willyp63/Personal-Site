import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { AppLayoutModule } from '@app/app-layout/app-layout.module';

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
  ],
  declarations: [
    ProjectsComponent,
  ],
  exports: [
    ProjectsComponent,
  ],
})
export class ProjectsModule { }
