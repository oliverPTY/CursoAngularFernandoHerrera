import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrMsj]'
})
export class ErrMsjDirective {
  //-Variables
  @Input() set MensajeError (valor: string){
   this.htmlElement.nativeElement.innerText = valor
   this._mensaje = valor;
  };
  @Input() set color (valor: string){
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor
  } 
  @Input() set valido(valor: boolean){
    if(valor === false){
      this.htmlElement.nativeElement.classList.add('hiden')
    }else{
      this.htmlElement.nativeElement.classList.remove('hiden')
    }
  }

  htmlElement: ElementRef<HTMLElement>;
 private _color: string = 'red';
 private _mensaje: string = 'este campo es requerido'


  constructor(private el: ElementRef<HTMLElement>) { 
    this.htmlElement = el;
  }

  ngOnInit(): void {
   this.setcolor();
   this.mostrarMSJ();
  }

  ngOnChanges(changes: SimpleChanges): void {
   // this.htmlElement.nativeElement.style.color = this.color;
  }
  
  //Muestra el color seleccionado
  setcolor(){
    this.htmlElement.nativeElement.style.color = this._color;
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  //-Muestra mensaje seleccionado
  mostrarMSJ(){
    this.htmlElement.nativeElement.innerText = this._mensaje
  }

}
