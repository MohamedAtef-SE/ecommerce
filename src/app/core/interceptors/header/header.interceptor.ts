import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
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
