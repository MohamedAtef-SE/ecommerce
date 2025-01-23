import { Component, inject, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  step:WritableSignal<number> = signal(1);
  message: WritableSignal<string | null> = signal(null);

  _AuthService = inject(AuthService);
  _Router = inject(Router);
  verifiyEmailSubcribe!:Subscription;
  verifiyCodeSubcribe!:Subscription;
  changePasswordSubcribe!:Subscription;

  verifiyEmailGroup: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email])
  })

  verifiyCodeGroup: FormGroup = new FormGroup({
    resetCode: new FormControl(null,[Validators.required, Validators.pattern(/^[0-9]{6}$/)])
  })

  resetPasswordGroup: FormGroup = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    newPassword: new FormControl(null,[Validators.required, Validators.pattern(/^\w{6,}$/)])
  })

verifiyEmailSubmit():void{
  this.verifiyEmailSubcribe = this._AuthService.setVerifiyEmail(this.verifiyEmailGroup.value).subscribe({
    next: (res)=>{
      this.message.set(res.message);
      this.counter();
    }
  })
}

verifiyCodeSubmit():void{
  this.verifiyCodeSubcribe = this._AuthService.setVerifiyCode(this.verifiyCodeGroup.value).subscribe({
    next: (res)=>{
      let verifiyEmailValue = this.verifiyEmailGroup.get('email')?.value;
      this.resetPasswordGroup.get('email')?.patchValue(verifiyEmailValue);
     
      if(res.status == 'Success')
        this.counter();
    }
  })
}

resetUserPasswordSubmit():void{
  this.changePasswordSubcribe = this._AuthService.resetUserPassword(this.resetPasswordGroup.value).subscribe({
    next: (res)=>{
      if(res.token !== null){
        localStorage.setItem('userToken',res.token)
        this._AuthService.setUserData();
        this._Router.navigate(['home']);
      }
    }
  })
}

  counter():void{
    this.step.update( (currentNumber )=> currentNumber + 1 )
  }
}
