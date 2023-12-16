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
      'opacity 1s ease-in-out'
    );
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.fadeOutComplete.emit(true);
  }
}
