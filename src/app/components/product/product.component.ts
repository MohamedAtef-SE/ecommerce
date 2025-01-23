import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { IProduct, IWishlistResponse } from '../../core/interfaces/Models';
import { RouterLink } from '@angular/router';
import { TermtextPipe } from "../../core/pipes/termtext/termtext.pipe";
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CartService } from '../../core/services/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../core/services/wishlist/wishlist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, TermtextPipe, UpperCasePipe,CurrencyPipe,TranslateModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input() Product:IProduct = {} as IProduct;
  @Input() wishlistIDsAsString: WritableSignal<string> = signal('');

  private readonly _CartService = inject(CartService);
  private readonly _WishlistService = inject(WishlistService);
  private readonly _ToastrService = inject(ToastrService);

  CartSubscribe!:Subscription;

  addProductToCart(id:string):void{
  this.CartSubscribe = this._CartService.addToCart(id).subscribe({
    next: (res)=>{
      this._CartService.NumberOfCartItems.next(res.numOfCartItems);
      this._ToastrService.success(res.message,"Amazon")
    }
  })
  }
  
  removeFromWishlist(id: string) {
    this._WishlistService.removeFromWishlist(id).subscribe((res:IWishlistResponse)=>{
      this._ToastrService.success(res.message,"Amazon")
      this.wishlistIDsAsString.update( ()=> res.data.join(' ') )
      this._WishlistService.WishlistNumbers.set(res.data.length)
    })
    }
  
  
  addToWishlist(proId: string):void {
    this._WishlistService.addToWishlist(proId).subscribe((res:IWishlistResponse)=>{
      this.wishlistIDsAsString.update( ()=> res.data.join(' ') )
      this._WishlistService.WishlistNumbers.set(res.data.length)
      this._ToastrService.success(res.message,"Amazon")
    })
    }
}
