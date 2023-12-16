import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appFadeOut]',
})
export class FadeOutDirective {
  delay: number = 1000;
  @Output() fadeOutComplete: EventEmitter<boolean> =
    new EventEmitter<boolean>();

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
      'transform 0.1s ease-in-out'
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'translateY(-100%)'
    );
    this.fadeOutComplete.emit(true);
  }
}
