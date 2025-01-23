import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ICartItem, ICartResponse } from '../../../core/interfaces/Models';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CurrencyPipe,TranslateModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  @Input() cartDetails: WritableSignal<ICartResponse> = signal({} as ICartResponse)
  @Input() CartItem: ICartItem = {} as ICartItem; 
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService)
  
  CartSubscribe!: Subscription;

  removeCartItem(id:string):void{
    this.CartSubscribe = this._CartService.removeCartItem(id).subscribe({
      next: (res:ICartResponse)=>{
        this._ToastrService.success("Item removed successfully","Amazon")
        this.cartDetails.update( () => res )
        this._CartService.NumberOfCartItems.next(res.numOfCartItems) 
         
        if(res.numOfCartItems === 0){
          this._CartService.IsCartFound.set(false)  
        }
          
      }
    })
  }
  
  increaseQuantity(id:string,count:number):void{
  this._CartService.quantityIncrease(id,count).subscribe({
    next:(res: ICartResponse)=>{
      this.cartDetails.update(()=> res)
    }
  })
  }
  
  decreaseQuantity(id:string,count:number):void{
    this._CartService.quantityDecrease(id,count).subscribe({
      next:(res: ICartResponse)=>{
        this.cartDetails.update( ()=> res )
      }
    })
    }  
}
