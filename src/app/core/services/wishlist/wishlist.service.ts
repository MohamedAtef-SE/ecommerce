import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  
  constructor(private _HttpClient:HttpClient) { }


  WishlistNumbers: WritableSignal<number> = signal(0);
  IsWishlistFound: WritableSignal<boolean> = signal(false);
  addToWishlist(id:string):Observable<any>{
    return this._HttpClient.post(`${environment.apiUrl}/api/v1/wishlist`,{
      "productId": id
    })
  }
  removeFromWishlist(id: string):Observable<any> {
    return this._HttpClient.delete(`${environment.apiUrl}/api/v1/wishlist/${id}`)
  }


  getUserWishlist():Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}/api/v1/wishlist`)
  }
}
