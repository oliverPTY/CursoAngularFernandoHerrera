import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appCustomIF]'
})
export class CustomIFDirective {

  @Input() set appCustomIF (valor: boolean){
    if(valor ===true){
     this.viewContainer.createEmbeddedView(this.templateref);
    }else{
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateref: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
    ) { }


}
