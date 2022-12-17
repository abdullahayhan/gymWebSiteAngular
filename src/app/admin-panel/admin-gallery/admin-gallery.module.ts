import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminGalleryComponent } from './admin-gallery.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AdminGalleryComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[AdminGalleryComponent]
})
export class AdminGalleryModule { }
