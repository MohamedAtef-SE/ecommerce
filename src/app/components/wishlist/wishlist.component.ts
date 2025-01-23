import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, OnDestroy, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { IWishlistGetResponse, IWishlistResponse } from '../../core/interfaces/Models';
import { WishlistService } from '../../core/services/wishlist/wishlist.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CurrencyPipe,TranslateModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit, OnDestroy {


private readonly _ToastrService = inject(ToastrService)
private readonly _WishlistService = inject(WishlistService)

WishlistDetails: WritableSignal<IWishlistGetResponse> = signal({} as IWishlistGetResponse)
WishlistSubscribe!: Subscription;
isWishlistFound: Signal<boolean> = computed(()=> this._WishlistService.IsWishlistFound())


getWishlistWithSubscribe():void{
  this.WishlistSubscribe = this._WishlistService.getUserWishlist().subscribe({
    next: (res:IWishlistGetResponse)=>{
      this._WishlistService.WishlistNumbers.set(res.count)
      this.WishlistDetails.set(res);
      if(res.status == 'success')
        this._WishlistService.IsWishlistFound.set(true)
      if(res.data.length === 0)
        this._WishlistService.IsWishlistFound.set(false)
    }
  })
}

ngOnInit(): void {
this.getWishlistWithSubscribe();
}

removeWishlistItem(id:string):void{
  this.WishlistSubscribe = this._WishlistService.removeFromWishlist(id).subscribe({
    next: (res:IWishlistResponse)=>{
      this._ToastrService.success(res.message,"Amazon");
      this.getWishlistWithSubscribe();
      if(res.data.length === 0)
        this._WishlistService.IsWishlistFound.set(false)
      
    }
  })
}

ngOnDestroy(): void {
  this.WishlistSubscribe?.unsubscribe();
}

}
