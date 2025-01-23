import { Directive, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appButtons]',
  standalone: true
})
export class ButtonsDirective {

  private static currentActiveButton: HTMLElement | null = null;

  constructor(private el: ElementRef) { }
  
  @HostListener('click', ['$event']) onClick(e: Event): void {

    if (ButtonsDirective.currentActiveButton) {
      ButtonsDirective.currentActiveButton.classList.remove('bg-secondary');
    }

    ButtonsDirective.currentActiveButton = this.el.nativeElement;

    if(ButtonsDirective.currentActiveButton){
      ButtonsDirective.currentActiveButton.classList.add('bg-secondary');
    } 
  }

}
