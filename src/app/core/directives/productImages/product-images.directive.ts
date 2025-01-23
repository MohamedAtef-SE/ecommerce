import { Directive, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ProductsService } from '../../services/products/products.service';

@Directive({
  selector: '[appProductImages]',
  standalone: true
})
export class ProductImagesDirective {

  private static Img: HTMLElement;
  _ProductService = inject(ProductsService);

  constructor(private el: ElementRef){
    // =====> Optional 01
    // fromEvent(el.nativeElement,'mouseenter').subscribe((e:any)=>{
    //   this._ProductService.MainImageCover.set(e.target.currentSrc)
      
    // })
  }

  // =====> Optional 02
  @HostListener('mouseenter') onHover(){
    ProductImagesDirective.Img = this.el.nativeElement;
    var hoveredImgSrc = ProductImagesDirective.Img?.getAttribute('src');

    if(hoveredImgSrc !== null || hoveredImgSrc !== undefined){
      this._ProductService.MainImageCover.set(hoveredImgSrc!)
    }

  };
}
