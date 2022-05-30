import {
  Directive,
  Input,
  OnChanges,
  ElementRef,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { Time } from '../../utils/constants';

@Directive({
  selector: '[appColor]',
})
export class ColorLineDirective implements OnChanges {
  @Input() appColor?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if ('appColor' in changes) {
      this.color();
    }
  }

  private color() {
    if (!this.appColor) return;
    const date = new Date(this.appColor);
    const now = new Date();
    const today = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
    ).valueOf();
    const dateString = date.valueOf();
    if (dateString < today - Time.SecInSixMonth) {
      this.renderer.addClass(this.elementRef.nativeElement, 'red');
      this.elementRef.nativeElement.style.background = '#EB5757';
    }
    if (dateString > today - Time.SecInOneMonth) {
      this.renderer.addClass(this.elementRef.nativeElement, 'green');
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background',
        '#27AE60',
      );
    }
    if (dateString > today - Time.SecInOneWeek) {
      this.renderer.addClass(this.elementRef.nativeElement, 'blue');
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background',
        '#2F80ED',
      );
    }
  }
}
