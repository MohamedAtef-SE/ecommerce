import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { ILogin, IRegister, IUserData } from '../../interfaces/Models';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private readonly _httpClient:HttpClient = inject(HttpClient);

  UserData: WritableSignal<IUserData | null> = signal(null);
  _Router = inject(Router);

  setRegisterForm(data:IRegister):Observable<any>
  {
    // return Observable Object not promise like regular JS
    return this._httpClient.post(`${environment.apiUrl}/api/v1/auth/signup`,data);
  }

  setLoginForm(data:ILogin) : Observable<any>
  {
    return this._httpClient.post(`${environment.apiUrl}/api/v1/auth/signin`,data);
  }

setVerifiyEmail(data:object):Observable<any>{
  return this._httpClient.post(`${environment.apiUrl}/api/v1/auth/forgotPasswords`,data);
}


setVerifiyCode(data:object):Observable<any>{
  return this._httpClient.post(`${environment.apiUrl}/api/v1/auth/verifyResetCode`,data);
}

resetUserPassword(data:object):Observable<any>{
  return this._httpClient.put(`${environment.apiUrl}/api/v1/auth/resetPassword`,data);
}

  logout():void{
    localStorage.removeItem('userToken');
    this.UserData.set(null);

    //call API Remove token
    
    //navigate login
    this._Router.navigate(['/login']);
  }

  setUserData():void {
    if(localStorage.getItem('userToken')){
      this.UserData.set(jwtDecode(localStorage.getItem('userToken')!));
      if(this.UserData()?.name !== null){
        let userName:any = this.UserData()?.name
        localStorage.setItem('userName',userName)
      }
        
    }
     
  }
}
