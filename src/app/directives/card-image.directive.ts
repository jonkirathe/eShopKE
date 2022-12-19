import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[cardImage]',
  standalone: true
})
export class CardImageDirective {

  private readonly domElement: HTMLElement;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.domElement = this.element.nativeElement as HTMLElement;
  }

  @HostListener('mouseover') onMouseOver() {
    this.expand(250,230);

  }

  @HostListener('mouseleave', ['$event']) onMouseLeave() {
    this.expand(150, 150);
  }

  private expand(height: number, width: number) {
    let cardImage = this.element.nativeElement.querySelector('.image')
    let cardTitle = this.element.nativeElement.querySelector('.card-title')
    this.renderer.setStyle(cardTitle, "color", 'blue');
    this.renderer.addClass(cardImage, 'border');
    this.renderer.setStyle(cardImage, "height", `${height}px`);
    this.renderer.setStyle(cardImage, "width", `${width}px`);
    this.renderer.setStyle(cardImage, "transition", 'width 1s, height 1s, transform 2s linear 1s');
  }

}
