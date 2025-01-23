import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environments';
import { IAddress } from '../../interfaces/Models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _HttpClient: HttpClient) { }

  checkoutSession(cartId: string,shippingAddress:IAddress):Observable<any> {
    return this._HttpClient.post(`${environments.baseURL}/api/v1/orders/checkout-session/${cartId}?url=${environments.urlServer}`,{shippingAddress})
  }

  getUserOrders(userId: string):Observable<any> {
    return this._HttpClient.get(`${environments.baseURL}/api/v1/orders/user/${userId}`);
  }
}