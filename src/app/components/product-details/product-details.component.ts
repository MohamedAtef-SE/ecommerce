import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ProductImagesDirective } from '../../core/directives/productImages/product-images.directive';
import { IProduct, IProductDetailsResponse } from '../../core/interfaces/Models';
import { CartService } from '../../core/services/cart/cart.service';
import { ProductsService } from '../../core/services/products/products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe,ProductImagesDirective],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

private readonly _ProductsService = inject(ProductsService);
private readonly _CartService = inject(CartService);
private readonly _ActivatedRoute = inject(ActivatedRoute);
private readonly _ToastrService = inject(ToastrService);
ProductDetailsSubscribe!: Subscription;
CartSubscribe!: Subscription;
Product: WritableSignal<IProduct>  = signal({} as IProduct);
ImageCover:Signal<string> = computed(()=> this._ProductsService.MainImageCover())

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next: (params)=>{
      const id = params.get('id');
      if(id !== null)
        this.getProductDetails(id)
    }
  })
  
}

addProductToCart(id:string):void{
  this.CartSubscribe = this._CartService.addToCart(id).subscribe({
    next: (res)=>{
      this._CartService.NumberOfCartItems.next(res.numOfCartItems);
      this._ToastrService.success(res.message,"Amazon")
    }
  })
  }

  getProductDetails(id:string):void{
    this.ProductDetailsSubscribe = this._ProductsService.getSpecificProductDetails(id).subscribe({
      next: (res:IProductDetailsResponse)=>{
        this._ProductsService.MainImageCover.set(res.data.imageCover);
        this.Product?.set(res.data);
      }
    })
    }  

ngOnDestroy(): void {
  this.ProductDetailsSubscribe.unsubscribe();
}

}
