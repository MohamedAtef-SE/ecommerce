import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environments';
import { IAddress } from '../../interfaces/Models';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  
  constructor(private _HttpClient: HttpClient) { }


  getUserAddress():Observable<any> {
    return this._HttpClient.get(`${environments.baseURL}/api/v1/addresses`)
  }

  addUserAddress(address:IAddress): Observable<any>{
    return this._HttpClient.post(`${environments.baseURL}/api/v1/addresses`,address)
  }

  removeUserAddress(addressId?:string):Observable<any>{
    return this._HttpClient.delete(`${environments.baseURL}/api/v1/addresses/${addressId}`)
  }

}
