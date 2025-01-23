
import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { OrderService } from '../../services/order/order.service';
import { ToastrService } from 'ngx-toastr';


export const envInterceptor:HttpInterceptorFn = (req,next)=>{

    const _PLATFORM_ID = inject(PLATFORM_ID);
    const _OrderService = inject(OrderService);
    const _ToastrService = inject(ToastrService);

    if(!isPlatformBrowser(_PLATFORM_ID)) return next(req);

    if(req.url.includes('localhost')){
        _OrderService.StripeEnvironmentSuccessUrl.set("http://localhost:4200");
    }
    else{
        _OrderService.StripeEnvironmentSuccessUrl.set("https://ecommerce-97b46.web.app");
    }

    return next(req);
}