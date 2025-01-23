import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICartResponse } from '../../core/interfaces/Models';
import { CartService } from '../../core/services/cart/cart.service';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterLink, CartItemComponent,TranslateModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, OnDestroy {

private readonly _CartService = inject(CartService);

CartDetails: WritableSignal<ICartResponse> = signal({} as ICartResponse)
ProductsSubscribe!: Subscription;
CartSubscribe!: Subscription;
isCartFound: Signal<boolean> = computed(()=> this._CartService.IsCartFound())

ngOnInit(): void {
  this.CartSubscribe = this._CartService.getUserCart().subscribe({
    next: (res:ICartResponse)=>{
      this.CartDetails.set(res);   
      if(res.status == 'success')
       this._CartService.IsCartFound.set(true)
      if(res.data.products.length == 0){
        this._CartService.IsCartFound.set(false)
      }
        
    }
  })
}


clearCart():void{
  this.CartSubscribe = this._CartService.clearUserCart().subscribe({
    next:(res)=>{
      if(res.message === 'success'){
        this.CartDetails.set({}as ICartResponse)
        this._CartService.NumberOfCartItems.next(0);
        this._CartService.IsCartFound.set(false)
      }  
    }
  })
}
ngOnDestroy(): void {
  this.CartSubscribe?.unsubscribe();
  this.ProductsSubscribe?.unsubscribe();
}

}
