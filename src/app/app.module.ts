import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { RoutingModule } from '@app/routes/routing.module';
import { HomeModule } from '@app/home/home.module';
import { AboutModule } from '@app/about/about.module';
import { ContactModule } from '@app/contact/contact.module';
import { PageNotFoundModule } from '@app/page-not-found/page-not-found.module';
import { ProjectsModule } from '@app/projects/projects.module';
import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HomeModule,
    ContactModule,
    AboutModule,
    ProjectsModule,
    BlogModule,
    PageNotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
