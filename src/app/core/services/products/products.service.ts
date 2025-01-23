import { HttpClient } from '@angular/common/http';
import { Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environments';
import { IFilter, IProduct } from '../../interfaces/Models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
constructor(private _HttpClient:HttpClient){}

filterValue: WritableSignal<IFilter> = signal({} as IFilter)
FilteredBy: WritableSignal<IFilter> = signal({});
MainImageCover: WritableSignal<string> = signal('');
NumberOfPages: WritableSignal<number> = signal(0);

getProducts(queries?:IFilter): Observable<any>{

  let url = `${environments.baseURL}/api/v1/products?limit=12&sort=title`;
  
  if(queries === null){
    return this._HttpClient.get(url);
  }

  if(queries?.sort !== undefined){
    url =`${environments.baseURL}/api/v1/products?limit=12&sort=${queries.sort}`;
  }

  if(queries?.page !== undefined){
    url += `&page=${queries.page}`;
  }

  if(queries?.brand !== undefined && queries?.brand !== 'all'){
    url+= `&brand=${queries?.brand}`;
  };

  if(queries?.category !== undefined && queries?.category !== 'all'){
    url+= `&category=${queries.category}`;
  }
  
  return this._HttpClient.get(url);
}

 getSpecificProductDetails(id: string): Observable<any>{
  return this._HttpClient.get(`${environments.baseURL}/api/v1/products/${id}`);
 }
 
}
