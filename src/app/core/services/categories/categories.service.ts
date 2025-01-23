import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

_HttpClient = inject(HttpClient);

getCategories():Observable<any>{

  return this._HttpClient.get(`${environments.baseURL}/api/v1/categories`);
}
 
}
