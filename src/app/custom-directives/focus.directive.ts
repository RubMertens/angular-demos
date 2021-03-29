import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective implements AfterContentInit {

  constructor(private element: ElementRef) { }
  ngAfterContentInit(): void {
    this.element.nativeElement.focus();
  }

}
