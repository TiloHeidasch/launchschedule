import { Directive, ElementRef, AfterViewInit, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appSlideIn]",
})
export class SlideInDirective implements AfterViewInit {
  private observer: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          this.renderer.removeClass(entry.target, "exit-enter-styles");
        } else {
          this.renderer.addClass(entry.target, "exit-enter-styles");
        }
      });
    });
    this.observer.observe(this.el.nativeElement);
  }
}
