import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IAddress, IAddressResponse } from '../../core/interfaces/Models';
import { AddressService } from '../../core/services/address/address.service';
import { OrderService } from '../../core/services/order/order.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})

export class CheckoutComponent implements OnInit {
  
private readonly _OrderService = inject(OrderService);
private readonly _ToastrService = inject(ToastrService);
private readonly _ActivatedRoute = inject(ActivatedRoute);
private readonly _AddressService = inject(AddressService);

FormGroups: WritableSignal<FormGroup[]> = signal([]);

CartId:WritableSignal<string> = signal("");

ShippingAddressGroup:FormGroup = new FormGroup({
  name: new FormControl(null,Validators.required),
  details: new FormControl(null,Validators.required),
  phone: new FormControl(null,Validators.required),
  city: new FormControl(null,Validators.required)
})

NewAddressGroup:FormGroup = new FormGroup({
  name: new FormControl(null,Validators.required),
  details: new FormControl(null,Validators.required),
  phone: new FormControl(null,Validators.required),
  city: new FormControl(null,Validators.required)
})


ngOnInit(): void {
  this._AddressService.getUserAddress().subscribe({
    next:(res:IAddressResponse)=>{
      for(let address of res.data){
        let g: FormGroup = new FormGroup({
          _id: new FormControl(address._id),
          name: new FormControl(address.name),
          details: new FormControl(address.details),
          phone: new FormControl(address.phone),
          city: new FormControl(address.city)
        })
        this.FormGroups.update((prev)=> [g,...prev])
      }
    }
  })

  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      let cartId = params.get('cartId');
      
      if(cartId !== null)
        this.CartId.set(cartId)
    }
  })
}

addNewAddress():void{
  if(this.NewAddressGroup.invalid){
    this.NewAddressGroup.setErrors({mismatch: true})
    this.NewAddressGroup.markAllAsTouched()
  }
  else{
    let newAddress: IAddress = {
      city: this.NewAddressGroup.get('city')?.value,
      details: this.NewAddressGroup.get('details')?.value,
      name: this.NewAddressGroup.get('name')?.value,
      phone: this.NewAddressGroup.get('phone')?.value
    }
    this._AddressService.addUserAddress(newAddress).subscribe((res:IAddressResponse)=>{
      if(res.status === 'success'){
        let g:FormGroup = new FormGroup({
          'name': new FormControl(newAddress.name),
          'details': new FormControl(newAddress.details),
          'city': new FormControl(newAddress.city),
          'phone': new FormControl(newAddress.phone)
        })
        this.FormGroups.update(prev => [g,...prev])
        this.NewAddressGroup.reset();
        this._ToastrService.success(res.message,"Amazon")
      }
    })
  }
}

removeAddress(id?:string){
  this._AddressService.removeUserAddress(id).subscribe((res:IAddressResponse)=>{
    this.FormGroups.set([]);
    for(let address of res.data){
      let g:FormGroup = new FormGroup({
        _id: new FormControl(address._id),
        name: new FormControl(address.name),
        details: new FormControl(address.details),
        phone: new FormControl(address.phone),
        city: new FormControl(address.city)
      })
      this.FormGroups.update((prev)=> [...prev,g])
    }
    this._ToastrService.success(res.message,'Amazon')
  })
}

checkoutSubmit():void {
  if(this.ShippingAddressGroup.invalid){
    this.ShippingAddressGroup.setErrors({mismatch: true});
    this.ShippingAddressGroup.markAllAsTouched();
  }
  else{
    let shippingAddress : IAddress = {
      "name": this.ShippingAddressGroup.get('name')?.value,
      "details": this.ShippingAddressGroup.get('details')?.value,
      "phone": this.ShippingAddressGroup.get('phone')?.value,
      "city": this.ShippingAddressGroup.get('city')?.value,
      }
    this._OrderService.checkoutSession(this.CartId(),shippingAddress).subscribe({
      next:(res)=>{
        if(res.status === 'success')
          window.open(res.session.url,'_self');
      }
    });
  }
  }

  savedAddressSubmit(g:FormGroup):void {
    let shippingAddress : IAddress = {
      "name": g.get('name')?.value,
      "details": g.get('details')?.value,
      "phone": g.get('phone')?.value,
      "city": g.get('city')?.value,
      }
      this._OrderService.checkoutSession(this.CartId(),shippingAddress).subscribe({
        next:(res)=>{
          if(res.status === 'success')
            window.open(res.session.url,'_self');
        }
      });
    }
}