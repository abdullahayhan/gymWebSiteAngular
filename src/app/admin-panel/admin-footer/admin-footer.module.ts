import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminFooterComponent } from './admin-footer.component';



@NgModule({
  declarations: [AdminFooterComponent],
  imports: [
    CommonModule,RouterModule
  ],exports:[AdminFooterComponent]
})
export class AdminFooterModule { }
