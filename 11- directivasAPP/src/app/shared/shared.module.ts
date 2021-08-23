import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrMsjDirective } from './directivas/err-msj.directive';
import { CustomIFDirective } from './directivas/custom-if.directive';



@NgModule({
  declarations: [
    ErrMsjDirective,
    CustomIFDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrMsjDirective,
    CustomIFDirective
  ]
})
export class SharedModule { }
