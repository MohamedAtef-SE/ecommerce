import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';


export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  const _PLATFORM_ID = inject(PLATFORM_ID);
  
  if(!isPlatformBrowser(_PLATFORM_ID)) return next(req);

  let userToken = localStorage.getItem('userToken')
  if(userToken !== null)
    {
      if(!req.url.includes('signup') || !req.url.includes('signin')){
        req = req.clone({
          setHeaders: {Token: userToken}
        })
      }

    }
  

  return next(req);
};
