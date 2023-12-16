import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appFadeOut]',
})
export class FadeOutDirective implements OnInit {
  @Input() delay: number = 7000; 
  @Output() fadeOutComplete: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
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
    setTimeout(() => {
      this.fadeOutComplete.emit(true);
    }, 500);
  }
}
