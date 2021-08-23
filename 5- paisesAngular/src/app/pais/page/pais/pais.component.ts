import { Component, OnInit } from '@angular/core';
import { BusquedaPorPais } from '../../interfaces/buscarPorPais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PaisComponent{

    
  constructor(private BuscarPaisService:PaisService){}
  
  termino: string = '';
  hayError: boolean = false;
  mostrarSuegerencia: boolean = false;


  pais: BusquedaPorPais[] = [];
  paisSegerencia: BusquedaPorPais[]=[];


  buscar(termino:string){
   this.mostrarSuegerencia = false;
    this.termino = termino;
    this.hayError = false; 
    this.BuscarPaisService.BuscarPais(this.termino).subscribe( (paisesData) =>{
    this.pais = paisesData;

   }, error=>{
     this.hayError = true;  
     this.pais = [];       
   })
  }

  sugerencias (termino: string){
    this.termino = termino;
    this.mostrarSuegerencia = true;
    this.BuscarPaisService.BuscarPais(this.termino).subscribe((paisesSuge =>{
      this.paisSegerencia = paisesSuge;
    }),
    (err) =>{ this.paisSegerencia = [];
    })
  
    this.hayError = false;


  }

  buscarSugerencia (termino: string){
    this.buscar(termino);
  }

}
