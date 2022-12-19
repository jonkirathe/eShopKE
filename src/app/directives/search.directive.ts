import {Directive, HostBinding, HostListener, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[myHighlight]',
  standalone: true
})
export class SearchDirective {

  @Output('action') action = new EventEmitter<any>();
  @HostBinding('attr.maxlength') max: number = 10;
  @HostBinding('style.backgroundColor') color!: string;

  constructor() {

  }

  @HostListener('keyup', ['$event.target.value']) onKeyDown(data: any) {
    if (data.length >= this.max) {
      this.action.emit(`Enter atLeast ${this.max} character`);
      this.highlight('gray');
    } else if (data.length < this.max){
      this.highlight('white');

    }
  }

  @HostListener('mouseleave', ['$event.target.value']) onMouseLeave(data: any) {
    if (data.length <= this.max) {
      this.highlight('white');
    }
  }

  private highlight(color: string) {
    this.color = color;
  }
}
