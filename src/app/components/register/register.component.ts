import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

_authService:AuthService = inject(AuthService);
_formBuilder:FormBuilder = inject(FormBuilder);
_ToastrService = inject(ToastrService);
_Router:Router = inject(Router);
msgError?:string;
isLoading:boolean = false;

// registerForm: FormGroup =  new FormGroup({
//     name: new FormControl(null,[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
//     email: new FormControl(null,[Validators.required,Validators.email]),
//     password: new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
//     rePassword: new FormControl(null),
//     phone: new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])
// },this.confirmPassword);

registerForm: FormGroup = this._formBuilder.group({
  //name: this._formBuilder.control(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  // OR use Syntax sugar replace this._formBuilder.control with only []
  name: [null, [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
  email: [null, [Validators.required, Validators.email] ],
  password: [null , [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  rePassword: [null],
  phone: [null, [ Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/) ]]
}, {validators:[ this.confirmPassword ]} );

confirmPassword(g: AbstractControl){
if(g.get('password')?.value === g.get('rePassword')?.value){
  return null;
}
else{
  return {mismatch: true};
}
};

registerSubmit() {
    this.isLoading = true;
  if(this.registerForm.valid){
    this._authService.setRegisterForm(this.registerForm.value).subscribe({
      next: (res)=>{

        if(res.message === 'success'){
          this._Router.navigate(['/login']);
        }
        this.msgError = undefined;
        this.isLoading = false;
      },
      error:(err:HttpErrorResponse)=>{
        this._ToastrService.error(err.message)
        this.isLoading = false;
      }
    });
  
   }
   else{
    this.registerForm.setErrors({mismatch: true})
    this.isLoading = false;
    this.registerForm.markAllAsTouched();
   }
 }
}
