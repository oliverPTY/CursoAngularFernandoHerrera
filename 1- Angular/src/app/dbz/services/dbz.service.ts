import { Injectable } from "@angular/core";
import { PersonajesInterface } from "../interfaces/dbz.interfaces";




@Injectable()
export class dbzService {


    
 private personajesSBZ: PersonajesInterface [] = [
    {
      nombre: 'Goku',
      Poder: 15000
    },
    {
      nombre: 'veguetta',
      Poder:14500
    }
  ];

  get personajes (): PersonajesInterface[]{
    return [...this.personajesSBZ];
  }


    agregarPersonaje(argumentos: PersonajesInterface){
     this.personajesSBZ.push(argumentos);
    } 

  
}