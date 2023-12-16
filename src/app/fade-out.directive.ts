import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appFadeOut]',
})
export class FadeOutDirective {
  @Input() delay: number = 1000; // 10 sekund opóźnienia (możesz dostosować wartość)

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.fadeOut();
    }, this.delay);
  }

  private fadeOut() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'opacity 1s ease-in-out'
    );
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
  }
}
