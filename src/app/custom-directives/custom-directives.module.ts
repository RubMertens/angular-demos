import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusDirective } from './focus.directive';
import { ZoomDirective } from './zoom.directive';



@NgModule({
  declarations: [FocusDirective, ZoomDirective],
  imports: [
    CommonModule
  ],
  exports: [FocusDirective, ZoomDirective]
})
export class CustomDirectivesModule { }
