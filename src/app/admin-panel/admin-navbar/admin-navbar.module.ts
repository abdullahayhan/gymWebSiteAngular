import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar.component';



@NgModule({
  declarations: [AdminNavbarComponent],
  imports: [
    CommonModule,RouterModule
  ],exports:[AdminNavbarComponent]
})
export class AdminNavbarModule { }
