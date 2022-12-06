import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from './galery.component';



@NgModule({
  declarations: [GaleryComponent],
  imports: [
    CommonModule
  ],exports:[
    GaleryComponent
  ]
})
export class GalleryModule { }
