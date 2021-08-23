import { Component } from '@angular/core';
import { BusquedaComponent } from '../../components/busqueda/busqueda.component';
import { BusquedaPorPais } from '../../interfaces/buscarPorPais';
import { PaisService } from '../../services/pais.service';
import { PaisComponent } from '../pais/pais.component';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
  ]
})
export class RegionComponent{

  constructor(private RegionService: PaisService){}

regiones: string [] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
RegionActiva: string = '';

pais: BusquedaPorPais[] = [];

activarRegion (region: string){
   
  if(region === this.RegionActiva){return}
    
  this.RegionActiva = region;
  this.RegionService.buscarPorRegion(this.RegionActiva).subscribe((PaisPorRegion) =>{
  this.pais = PaisPorRegion;
  })


    
}

}
