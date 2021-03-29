import { element } from 'protractor';
import { Directive, ElementRef, HostListener, Input, Renderer2, enableProdMode } from '@angular/core';
import { timer } from 'rxjs';

@Directive({
  selector: '[zoom]'
})
export class ZoomDirective {

  @Input()
  zoom?: number = 1.2

  private currentTimer?: NodeJS.Timeout;
  constructor(private element: ElementRef, private render: Renderer2) { }

  @HostListener("mouseenter")
  mouseEnter() {
    if (this.currentTimer) {
      clearTimeout(this.currentTimer);
    }
    this.render.setStyle(this.element.nativeElement, "transform", `scale(${this.zoom})`);
    this.render.setStyle(this.element.nativeElement, "transition", "all 0.2s ease-in-out");
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.render.removeStyle(this.element.nativeElement, "transform");
    this.currentTimer = setTimeout(() => {
      this.render.removeStyle(this.element.nativeElement, "transition");
    }, 200);
  }
}
