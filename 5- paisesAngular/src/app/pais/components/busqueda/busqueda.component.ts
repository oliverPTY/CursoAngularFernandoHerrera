import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit{

@Output() onEnter: EventEmitter<string> = new EventEmitter();

@Output() onDebounce: EventEmitter<string> = new EventEmitter();

@Input() placeholder: string = '';


debouce: Subject<string> = new Subject();


teclaPrecionada(){
 // const valor = event.target.value;

 this.debouce.next(this.termino);
 
}

ngOnInit(){
  this.debouce.pipe(
    debounceTime(300)
  ).subscribe(valor =>{      
    this.onDebounce.emit(valor);
  })
}

  termino: string = '';

  buscar(){

    this.onEnter.emit(this.termino);

  }

}
