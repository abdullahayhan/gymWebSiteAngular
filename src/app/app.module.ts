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
import { ServicesModule } from './components/services/services.module';
import { AdminBlogModule } from './admin-panel/admin-blog/admin-blog.module';
import { AdminFooterModule } from './admin-panel/admin-footer/admin-footer.module';
import { AdminNavbarModule } from './admin-panel/admin-navbar/admin-navbar.module';
import { AdminPriceModule } from './admin-panel/admin-price/admin-price.module';
import { LoginModule } from './admin-panel/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
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
    FooterModule,
    ServicesModule,
    AdminBlogModule,
    AdminFooterModule,
    AdminNavbarModule,
    AdminBlogModule,
    AdminPriceModule,
    LoginModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
