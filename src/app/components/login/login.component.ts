import { NgClass } from '@angular/common';
import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { error } from 'console';
import { HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,RouterLink,TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  _FormBuilder = inject(FormBuilder);
  _AuthService = inject(AuthService);
  _Router = inject(Router);

  isLoading:WritableSignal<boolean> = signal(false);
  msgError:WritableSignal<string | undefined> = signal(undefined);

loginForm:FormGroup = this._FormBuilder.group({
  email: [null,[Validators.required,Validators.email]],
  password: [null, [Validators.required]],
})

  loginSubmit(){
  this.isLoading.set(true);
  if(this.loginForm.valid){
    this._AuthService.setLoginForm(this.loginForm.value).subscribe({
      next:(res)=>{
        this.isLoading.set(false);
        this.msgError.set(undefined);

        if(res.message === 'success'){
          // save-token
          localStorage.setItem('userToken',res.token);

          // Decode-Token
          this._AuthService.setUserData();
          this._Router.navigate(['/home'])
        } 
      },
      error:(err:HttpResponseBase)=>{
        this.isLoading.set(false);
      }
    });
  }
  else{
   setTimeout(()=>{
    this.loginForm.setErrors({invalidLogin: true});
    this.isLoading.set(false);
    this.loginForm.markAllAsTouched();
   },1000)
  }
  }

}