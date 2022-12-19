import { Component } from '@angular/core';
import { PriceDto } from 'src/app/core/models/price';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-price-add',
  templateUrl: './price-add.component.html',
  styleUrls: ['./price-add.component.css']
})
export class PriceAddComponent {
  price : PriceDto = {
    priceForMonth:0,
    priceForThreeMonth:0,
    priceForSixMonths:0,
    priceForYear:0
  };
  submitted = false;

  constructor(private priceServis:PriceService){}

  createPrice(){
   const data ={
    priceForMonth : this.price.priceForMonth,
    priceForThreeMonth : this.price.priceForThreeMonth,
    priceForSixMonths : this.price.priceForSixMonths,
    priceForYear:this.price.priceForYear
   };

    this.priceServis.createPrice(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }
}
