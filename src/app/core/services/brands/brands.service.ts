import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  _HttpClient = inject(HttpClient);

  getBrands(page:number):Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}/api/v1/brands?page=${page}`);
  }
}
