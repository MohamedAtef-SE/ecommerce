import { Component } from "@angular/core";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";



@Component({
    selector: 'app-ads',
    standalone: true,
    imports: [CarouselModule],
    templateUrl: './ads.component.html',
    styleUrl: './ads.component.scss'

})

export class AdsComponent{

    customOptions: OwlOptions = {
        loop: true,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        rtl: true,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1
          },
          940: {
            items: 1
          }
        },
        nav: true
      }   
}