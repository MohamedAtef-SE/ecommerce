import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAddress } from '../../interfaces/Models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  
  constructor(private _HttpClient: HttpClient) { }


  getUserAddress():Observable<any> {
    return this._HttpClient.get(`${environment.apiUrl}/api/v1/addresses`)
  }

  addUserAddress(address:IAddress): Observable<any>{
    return this._HttpClient.post(`${environment.apiUrl}/api/v1/addresses`,address)
  }

  removeUserAddress(addressId?:string):Observable<any>{
    return this._HttpClient.delete(`${environment.apiUrl}/api/v1/addresses/${addressId}`)
  }

}