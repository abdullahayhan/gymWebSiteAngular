import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPriceComponent } from './admin-price.component';
import { PriceAddComponent } from './price-add/price-add.component';
import { AdminNavbarModule } from "../admin-navbar/admin-navbar.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceUpdateComponent } from './price-update/price-update.component';



@NgModule({
    declarations: [AdminPriceComponent, PriceAddComponent, PriceUpdateComponent],
    exports: [AdminPriceComponent, PriceAddComponent,PriceUpdateComponent],
    imports: [
        CommonModule, RouterModule,
        AdminNavbarModule,ReactiveFormsModule,FormsModule
    ]
})
export class AdminPriceModule { }
