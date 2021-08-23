import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonajesInterface } from '../interfaces/dbz.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  constructor(private dbzservice:dbzService){}

  @Input() nuevo: PersonajesInterface ={
    nombre: '',
    Poder: 0
   }

  // @Output() OnNuevoPersonaje: EventEmitter<PersonajesInterface> = new  EventEmitter();
 
   Agregar(){
     if(this.nuevo.nombre.trim().length == 0){
       return
     }
 
       
       console.log(this.nuevo);
       this.dbzservice.agregarPersonaje(this.nuevo);
       //this.OnNuevoPersonaje.emit(this.nuevo);
       

       this.nuevo = {
         nombre: '',
         Poder: 0
       };
       
      
   
   }
  
  
   
  
   
 
  }


