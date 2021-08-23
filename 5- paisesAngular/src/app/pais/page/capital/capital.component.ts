import { Component} from '@angular/core';
import { BusquedaPorPais } from '../../interfaces/buscarPorPais';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
  ]
})
export class CapitalComponent{

  constructor(private BuscarPorCapital:PaisService) {}

  termino: string ='';
  ErrorPorCapital: boolean = false;

  pais: BusquedaPorPais[] = [];


  buscar(valor: string){
  this.termino = valor;
  this.ErrorPorCapital = false;

  this.BuscarPorCapital.BuscarCapital(this.termino).subscribe((capitales) => {
    this.pais = capitales;    
  }, error => {
    this.ErrorPorCapital = true;
    this.pais = [];
  })
  
  }

  sugerencias(evento: string){

    this.ErrorPorCapital = false;
   
  }

}
