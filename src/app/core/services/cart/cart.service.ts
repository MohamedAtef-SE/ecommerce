import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient: HttpClient) { }

  IsCartFound: WritableSignal<boolean> = signal(false);
  
  NumberOfCartItems:BehaviorSubject<number> = new BehaviorSubject(0);
  
  addToCart(productId: string):Observable<any>{
    return this._HttpClient.post(`${environment.apiUrl}/api/v1/cart`,{
      "productId": productId
  }
);
  }

  getUserCart():Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}/api/v1/cart`)
  }

  quantityIncrease(id:string,currentCount:number):Observable<any>{
  return this._HttpClient.put(`${environment.apiUrl}/api/v1/cart/${id}`,
    {
      count: currentCount + 1
    })
}

quantityDecrease(id:string,currentCount:number):Observable<any>{
  return this._HttpClient.put(`${environment.apiUrl}/api/v1/cart/${id}`,
    {
      count: currentCount - 1,
    })
}
removeCartItem(id: string):Observable<any> {
    return this._HttpClient.delete(`${environment.apiUrl}/api/v1/cart/${id}`)
  }

clearUserCart():Observable<any>{
    return this._HttpClient.delete(`${environment.apiUrl}/api/v1/cart`)
  }
}
