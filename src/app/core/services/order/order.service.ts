import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress } from '../../interfaces/Models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _HttpClient: HttpClient) { }

  StripeEnvironmentSuccessUrl: WritableSignal<string> = signal('');
  
  checkoutSession(cartId: string,shippingAddress:IAddress):Observable<any> {
    return this._HttpClient.post(`${environment.apiUrl}/api/v1/orders/checkout-session/${cartId}?url=${this.StripeEnvironmentSuccessUrl()}`,
    {
      shippingAddress
    })
  }

  getUserOrders(userId: string):Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}/api/v1/orders/user/${userId}`);
  }
}