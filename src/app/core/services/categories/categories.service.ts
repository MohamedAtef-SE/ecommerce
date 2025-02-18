import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

_HttpClient = inject(HttpClient);

getCategories():Observable<any>{

  return this._HttpClient.get(`${environment.apiUrl}/api/v1/categories`);
}
 
}
