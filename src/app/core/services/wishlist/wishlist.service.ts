import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environments';
import { IProduct } from '../../interfaces/Models';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  
  constructor(private _HttpClient:HttpClient) { }


  WishlistNumbers: WritableSignal<number> = signal(0);
  IsWishlistFound: WritableSignal<boolean> = signal(false);
  addToWishlist(id:string):Observable<any>{
    return this._HttpClient.post(`${environments.baseURL}/api/v1/wishlist`,{
      "productId": id
    })
  }
  removeFromWishlist(id: string):Observable<any> {
    return this._HttpClient.delete(`${environments.baseURL}/api/v1/wishlist/${id}`)
  }


  getUserWishlist():Observable<any>{
    return this._HttpClient.get(`${environments.baseURL}/api/v1/wishlist`)
  }
}
