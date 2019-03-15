import { Routes } from '@angular/router';
import { AboutComponent } from '@app/about/about.component';
import { ContactComponent } from '@app/contact/contact.component';
import { HomeComponent } from '@app/home/home.component';
import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';
import { ProjectsComponent } from '@app/projects/projects.component';
import { BlogComponent } from '@app/blog/blog.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];
