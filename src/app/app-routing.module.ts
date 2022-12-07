import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { GaleryComponent } from './components/galery/galery.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'aboutUs',component:AboutComponent},
  {path:'gallery',component:GaleryComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'blog',component:BlogComponent}
];

@NgModule({
  imports: [RouterModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
