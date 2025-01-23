import { isPlatformBrowser } from '@angular/common';
import { Component, computed, effect, inject, OnDestroy, OnInit, PLATFORM_ID, Signal, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { map, single, Subscription } from 'rxjs';
import { ICartResponse, IUserData, IWishlistGetResponse } from '../../core/interfaces/Models';
import { AuthService } from '../../core/services/auth/auth.service';
import { CartService } from '../../core/services/cart/cart.service';
import { MyTranslateService } from '../../core/services/mytranslate/mytranslate.service';
import { WishlistService } from '../../core/services/wishlist/wishlist.service';



@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,TranslateModule],
  templateUrl: './nav-blank.component.html',
  styleUrl: './nav-blank.component.scss'
})

export class NavBlankComponent implements OnInit, OnDestroy {
  private readonly _AuthService = inject(AuthService);
  private readonly _MyTranslateService = inject(MyTranslateService);
  private readonly _CartService = inject(CartService);
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  private readonly _WishlistService = inject(WishlistService)


  CartSubscribe!: Subscription;
  SavedLang:string = "en";
  cartNumber:WritableSignal<number> = signal(0);
  wishNumber:Signal<number> = computed(()=> this._WishlistService.WishlistNumbers());
  UserName: WritableSignal<string | null> = signal("")


ngOnInit():void{
  this._WishlistService.getUserWishlist().pipe(
    map((res:IWishlistGetResponse)=> res.count)
  ).subscribe({
    next:(count:number)=> this._WishlistService.WishlistNumbers.set(count)
  })

  this._CartService.getUserCart().subscribe({
    next:(res:ICartResponse)=>{
      this.cartNumber.set(res.numOfCartItems);
    }
  })
   this.CartSubscribe = this._CartService.NumberOfCartItems.subscribe({
    next: (data)=>{
      this.cartNumber.set(data);
    }
  })

if(isPlatformBrowser(this._PLATFORM_ID)){
  if(localStorage.getItem('lang') != null){
    this.SavedLang =  localStorage.getItem('lang')!;
    this.changeLang(this.SavedLang);
  }
} 

}

ngAfterViewInit():void{
    if(isPlatformBrowser(this._PLATFORM_ID)){
      this.UserName.set(localStorage.getItem('userName'))
    }
}


changeLang(lang:string) {
  this.SavedLang = lang
  this._MyTranslateService.ChangeLang(lang);
  }
  
  signOut():void{
    this._AuthService.logout();
  }

  ngOnDestroy():void{
    this.CartSubscribe.unsubscribe();
  }
}