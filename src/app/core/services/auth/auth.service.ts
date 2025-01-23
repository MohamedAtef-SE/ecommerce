import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environments';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { ILogin, IRegister, IUser, IUserData } from '../../interfaces/Models';

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
    return this._httpClient.post(`${environments.baseURL}/api/v1/auth/signup`,data);
  }

  setLoginForm(data:ILogin) : Observable<any>
  {
    return this._httpClient.post(`${environments.baseURL}/api/v1/auth/signin`,data);
  }

setVerifiyEmail(data:object):Observable<any>{
  return this._httpClient.post(`${environments.baseURL}/api/v1/auth/forgotPasswords`,data);
}


setVerifiyCode(data:object):Observable<any>{
  return this._httpClient.post(`${environments.baseURL}/api/v1/auth/verifyResetCode`,data);
}

resetUserPassword(data:object):Observable<any>{
  return this._httpClient.put(`${environments.baseURL}/api/v1/auth/resetPassword`,data);
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
