import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './components/about/about.module';
import { BlogModule } from './components/blog/blog.module';
import { ContactModule } from './components/contact/contact.module';
import { GalleryModule } from './components/galery/galery.module';
import { HomeModule } from './components/home/home.module';
import { FooterModule } from './components/footer/footer.module';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    GalleryModule,
    ContactModule,
    BlogModule,
    AboutModule,
    NavBarModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
