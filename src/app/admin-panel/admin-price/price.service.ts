import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Price, PriceDto } from 'src/app/core/models/price';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getPrice(){
    return this.http.get<Price>(this.baseUrl+'price/getPrice')
    .pipe(
      map(response=>{
        return response;
      },error=>{
        console.log('price get basarisiz: ',error);
      })
    );
  }


  createPrice(price:PriceDto){
    return this.http.post(this.baseUrl+'price/createPrice',price).pipe(
      map(response=>{
        return response;
      },error=>{
        console.log('price oluşturulurken hata: ',error);
      })
    );
  }

  updatePrice(price:Price){
    return this.http.post(this.baseUrl+'price/updatePrice',price).pipe( 
      map(response=>{
       return response;
      },error=>{
      console.log(error);
    }));
  }

  
}
