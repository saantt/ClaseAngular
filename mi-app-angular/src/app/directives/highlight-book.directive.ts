import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlightBook]'
})
export class HighlightBookDirective {

  constructor(

    private element: ElementRef,

    private renderer: Renderer2

  ) { }

  @HostListener('mouseenter')

  mouseEnter() {

    this.renderer.setStyle(

      this.element.nativeElement,

      'background',

      '#fff8dc'

    );

  }

  @HostListener('mouseleave')

  mouseLeave() {

    this.renderer.removeStyle(

      this.element.nativeElement,

      'background'

    );

  }

}