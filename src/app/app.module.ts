import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from '@app/app.component';
import { FooterComponent } from '@app/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    NavBarModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
