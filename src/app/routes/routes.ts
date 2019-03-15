import { Routes } from '@angular/router';
import { AboutComponent } from '@app/home/about/about.component';
import { ContactComponent } from '@app/home/contact/contact.component';
import { HomeComponent } from '@app/home/home.component';
import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';

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
    path: '',
    component: HomeComponent,
  },
  { path: '**', component: PageNotFoundComponent }
];
