import { IMAGE_CONFIG } from '@angular/common';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, RouterModule, withViewTransitions } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { provideToastr } from 'ngx-toastr';
import { appRoutes, routes } from './app.routes';
import { errorsInterceptor } from './core/interceptors/errors/errors.interceptor';
import { headerInterceptor } from './core/interceptors/header/header.interceptor';
import { loadingInterceptor } from './core/interceptors/loading/loading.interceptor';


// Create Function To Load Files from assets/i18n/
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    //importProvidersFrom(HttpClient),
    //OR use provideHttpClient() - recommended
    provideHttpClient(withFetch(), withInterceptors([headerInterceptor,errorsInterceptor,loadingInterceptor])),
    //importProvidersFrom(BrowserAnimationsModule), for ngx owl-carousel
    //OR use provideAnimations() - recommended for ngx owl-carousel
    provideAnimations(), // for ngx owl-carousel
    provideToastr(),
    importProvidersFrom( 
      NgxSpinnerModule,
      RouterModule.forRoot(routes,{useHash: true}),
      // provide files to project
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true, 
        disableImageLazyLoadWarning: true
      }
    },
  ]
};