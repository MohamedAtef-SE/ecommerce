import { inject, Injectable, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MyTranslateService {

  _TranslateService = inject(TranslateService)
  _Renderer02 = inject(RendererFactory2).createRenderer(null,null);

   ChangeDirection(lang:string):void{
    if(lang === 'en'){
      this._Renderer02.setAttribute(document.documentElement,'dir','ltr')
      this._Renderer02.setAttribute(document.documentElement,'lang','en')
    }
    else if(lang === 'ar'){
      this._Renderer02.setAttribute(document.documentElement,'dir','rtl')
      this._Renderer02.setAttribute(document.documentElement,'lang','ar')
    }
   }

   ChangeLang(lang:string):void{
    if(lang == 'ar'){
      this.ChangeDirection('ar');
      localStorage.setItem('lang','ar');
      this._TranslateService.use('ar')
    }
    else if(lang == 'en'){
      this.ChangeDirection('en');
      localStorage.setItem('lang','en');
      this._TranslateService.use('en')
    }
   }
}