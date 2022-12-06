import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from './galery.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [GaleryComponent],
  imports: [
    CommonModule
  ],exports:[
    GaleryComponent,
    RouterModule
  ]
})
export class GalleryModule { }
