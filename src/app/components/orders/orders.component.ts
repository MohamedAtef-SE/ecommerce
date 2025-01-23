import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { OrderService } from '../../core/services/order/order.service';
import { map, Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth/auth.service';
import { IUserOrder } from '../../core/interfaces/Models';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CurrencyPipe, DatePipe,TranslateModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit {

  private readonly _OrderService = inject(OrderService);
  private readonly _AuthService = inject(AuthService);
  OrderSubscribe!: Subscription;
  UserOrders:WritableSignal<IUserOrder[]> = signal([]);

  ngOnInit(): void {
    this._AuthService.setUserData();
    let userId = this._AuthService.UserData()?.id;
    this.OrderSubscribe = this._OrderService.getUserOrders(userId!).pipe(

      map((res:IUserOrder[])=> res.sort(o => o.id * - 1))
      
    ).subscribe({
      next:(res)=>{
       this.UserOrders.set(res);      
      }
    })
  }
}