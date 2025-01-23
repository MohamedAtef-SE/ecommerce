import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';


export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  let _NGXSpinnerService = inject(NgxSpinnerService);
  _NGXSpinnerService.show();

  return next(req).pipe(finalize(()=>{
    _NGXSpinnerService.hide()
  }));
};
