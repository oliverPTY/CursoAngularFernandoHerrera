import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interface/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[] , ordenarPorNombre: string = 'sin valor'): Heroe[] {
     
    switch(ordenarPorNombre){
      case 'Nombre':
        return heroes.sort((a,b)=> (a.Nombre > b.Nombre)? 1: -1 )
       case 'vuela':
         return  heroes.sort((a,b)=> (a.Vuela > b.Vuela)? -1: 1 )
       case 'color':
         return  heroes.sort((a,b)=> (a.Color > b.Color)? 1: -1 )
      
      default: return heroes;
    }
    
     
    
  }

}
