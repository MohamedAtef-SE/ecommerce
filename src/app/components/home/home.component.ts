import { Component, computed, effect, inject, OnDestroy, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { map, Subscription } from 'rxjs';
import { ButtonsDirective } from '../../core/directives/buttons/buttons.directive';
import { IProduct, IProductsResponse, IWishlistGetResponse } from '../../core/interfaces/Models';
import { ProductsService } from '../../core/services/products/products.service';
import { WishlistService } from '../../core/services/wishlist/wishlist.service';
import { ProductComponent } from "../product/product.component";
import { AdsComponent } from './ads/ads.component';
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AdsComponent, ButtonsDirective, TranslateModule, SidebarComponent, FormsModule, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit,OnDestroy {

  private readonly _ProductsService = inject(ProductsService);
  private readonly _WishlistService = inject(WishlistService);

  ProductsSubscribe!:Subscription;
  CartSubscribe!: Subscription;
  Products: WritableSignal<IProduct[]> = signal<IProduct[]>([]);
  numberOfPages: Signal<number> = computed(()=> this._ProductsService.NumberOfPages());
  numbers: WritableSignal<number[]> = signal([])
  wishlistIDsAsString: WritableSignal<string> = signal('');

  constructor(){
    
    effect(()=>{
      if(this.numbers().length > 0)
        this.numbers().splice(0,this.numbers().length)

      for(let i = 1;i <= this.numberOfPages();i++){
        this.numbers().push(i)
      }
    })

  }
  
  ngOnInit(): void {
    this.getWishlist();
    this.ProductsSubscribe = this._ProductsService.getProducts().pipe(
       map((res:IProductsResponse)=> {
         res.data = res.data.filter((product)=> product.quantity > 0)
         return res
       } )
      ).subscribe({
        next:(res:IProductsResponse)=>{
          this._ProductsService.NumberOfPages.set(res.metadata.numberOfPages)
          this.Products.set(res.data);
        }
      });
  }

  getWishlist():void{
    this._WishlistService.getUserWishlist().pipe(
      map((res:IWishlistGetResponse)=>{
        let x = res.data.map((item)=>  `${item.id}`)
        let y = x.join(' ');
        return y
      })
    ).subscribe((res:string)=>{
      this.wishlistIDsAsString.set(res);
    })
  }
  
sortBy(event:Event):void{
  const selectElement = event.target as HTMLSelectElement;
  this._ProductsService.FilteredBy.update((prev)=>{
    return {
      ...prev,
      sort: selectElement.value
    }})

    this._ProductsService.getProducts(this._ProductsService.FilteredBy()).subscribe((res:IProductsResponse)=>{
      this.Products.set(res.data)
    })
}

selectPage(page:number):void{
 
  if(this._ProductsService.FilteredBy().page === page) return;
  
  window.scrollTo({top: 0,behavior: 'smooth' });
  this._ProductsService.FilteredBy.update((prev)=>{
    return {
      ...prev,
      page: page
    }})
    this._ProductsService.getProducts(this._ProductsService.FilteredBy()).subscribe((res:IProductsResponse)=>{
      this._ProductsService.NumberOfPages.set(res.metadata.numberOfPages)
      this.Products.set(res.data)
    })
}


  ngOnDestroy(): void {
    this.ProductsSubscribe?.unsubscribe();
    this.CartSubscribe?.unsubscribe();
  }
}