import { Component, OnInit } from '@angular/core';
import { PriceService } from './price.service';

@Component({
  selector: 'app-admin-price',
  templateUrl: './admin-price.component.html',
  styleUrls: ['./admin-price.component.css']
})
export class AdminPriceComponent implements OnInit {
  price : any;
  constructor(private priceServer:PriceService){}
  
  ngOnInit(): void {
    this.getPrice();
  }

  getPrice(){
    this.priceServer.getPrice().subscribe(response=>{
      this.price=response;
    },error=>{
      console.log(error);
    })
  }
}
