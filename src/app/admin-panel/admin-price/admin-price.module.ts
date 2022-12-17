import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPriceComponent } from './admin-price.component';



@NgModule({
  declarations: [AdminPriceComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[AdminPriceComponent]
})
export class AdminPriceModule { }
