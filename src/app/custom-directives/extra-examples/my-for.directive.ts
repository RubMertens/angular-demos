
import { Directive, DoCheck, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyFor][appMyForOf]'
})
export class MyForDirective implements DoCheck {

  private list: any[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  ngDoCheck(): void {
    console.log('docheck', this);
    this.viewForList(this.list);
  }


  @Input() set appMyFor(list: any) {
    console.log('appMyFor', list);
    console.log('appmyfor this: ', this);
    this.list = list;
  }

  @Input() set appMyForOf(list: any[]) {
    console.log('appMyForOf', list);
    this.list = list;

  }

  private viewForList(list: any[]): void {
    this.viewContainerRef.clear();
    list.forEach((item, i) => {
      // const context = new MyViewContext(item, i);
      const ref = this.viewContainerRef.createEmbeddedView(this.templateRef);
      ref.context.index = i;
      ref.context.$implicit = item;
    });
  }


}

class MyViewContext {
  constructor(public $implicit: any, public index: number) { }
}
