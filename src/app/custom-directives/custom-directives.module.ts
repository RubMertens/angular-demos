import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusDirective } from './focus.directive';
import { ZoomDirective } from './zoom.directive';
import { MyUnlessDirective } from './extra-examples/my-unless.directive';
import { MyForDirective } from './extra-examples/my-for.directive';
import { UsingDirectiveExamplesComponent } from './extra-examples/using-directive-examples/using-directive-examples.component';



@NgModule({
  declarations: [FocusDirective, ZoomDirective, MyUnlessDirective, MyForDirective, UsingDirectiveExamplesComponent],
  imports: [
    CommonModule
  ],
  exports: [FocusDirective, ZoomDirective, UsingDirectiveExamplesComponent]
})
export class CustomDirectivesModule { }
