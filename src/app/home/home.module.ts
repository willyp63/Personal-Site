import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from '@app/shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
  ],
  exports: [
    HomeComponent,
  ],
})
export class HomeModule { }
