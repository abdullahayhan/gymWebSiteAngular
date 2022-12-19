import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/admin-panel/admin-price/price.service';
import { Price } from 'src/app/core/models/price';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  price:Price;
  constructor(private priceService:PriceService){}
  
  ngOnInit(): void {
    this.getPrice();
  }

  getPrice(){
    this.priceService.getPrice().subscribe(response=>{
      this.price=response;
    },error=>{
      console.log(error);
    })
  }

}
