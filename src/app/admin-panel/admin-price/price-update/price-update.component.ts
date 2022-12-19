import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Price } from 'src/app/core/models/price';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-price-update',
  templateUrl: './price-update.component.html',
  styleUrls: ['./price-update.component.css']
})
export class PriceUpdateComponent implements OnInit {
  
  price:Price;
  message='';

  constructor(private priceService:PriceService){}
  ngOnInit(): void {
    this.loadCurrentPrice();
  }


  loadCurrentPrice(){
    this.priceService.getPrice().subscribe(price=>{
      this.price=price;
    },error=>{
      console.log(error);
    })
  }


  updatePrice(){
    this.priceService.updatePrice(this.price)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = 'This price was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
}
