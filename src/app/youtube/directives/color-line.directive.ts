import {
  Directive, Input, OnInit, ElementRef, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
})

export class ColorLineDirective implements OnInit {
  @Input('appColor') publishedAt?: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    console.log('this.publishedAt', this.publishedAt);
    if (!this.publishedAt) return;
    const date = new Date(this.publishedAt);
    const secInOneWeek = 604800000;
    const secInOneMonth = 2419200000;
    const secInSixMonth = 15638400000;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
    const dateString = date.valueOf();
    if (dateString < today - secInSixMonth) {
      this.renderer.addClass(this.elementRef.nativeElement, 'red');
      this.elementRef.nativeElement.style.background = '#EB5757';
    }
    if (dateString > today - secInOneMonth) {
      this.renderer.addClass(this.elementRef.nativeElement, 'green');
      this.renderer.setStyle(this.elementRef.nativeElement, 'background', '#27AE60');
    }
    if (dateString > today - secInOneWeek) {
      this.renderer.addClass(this.elementRef.nativeElement, 'blue');
      this.renderer.setStyle(this.elementRef.nativeElement, 'background', '#2F80ED');
    }
  }
}
