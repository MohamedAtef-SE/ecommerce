import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MyTranslateService } from '../../core/services/mytranslate/mytranslate.service';

@Component({
  selector: 'app-nav-auth',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,TranslateModule],
  templateUrl: './nav-auth.component.html',
  styleUrl: './nav-auth.component.scss'
})
export class NavAuthComponent implements OnInit {
  
  _PLATFORM_ID  = inject(PLATFORM_ID);
  _MyTranslateService = inject(MyTranslateService);
  SavedLang:string = "en";


  ngOnInit(): void {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      if(localStorage.getItem('lang') != null){
        this.SavedLang =  localStorage.getItem('lang')!;
        this.changeLang(this.SavedLang);
      }
    } 
  }

  changeLang(lang:string) {
    this.SavedLang = lang
    this._MyTranslateService.ChangeLang(lang);
    }
    
}
