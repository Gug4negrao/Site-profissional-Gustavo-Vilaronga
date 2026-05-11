import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  inject
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  @Input('appReveal') variant: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' = 'up';
  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.15;

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const el = this.host.nativeElement as HTMLElement;
    this.renderer.addClass(el, 'reveal');
    this.renderer.addClass(el, `reveal--${this.variant}`);
    if (this.revealDelay) {
      this.renderer.setStyle(el, 'transition-delay', `${this.revealDelay}ms`);
    }

    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(el, 'reveal--visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'reveal--visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: this.revealThreshold }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
