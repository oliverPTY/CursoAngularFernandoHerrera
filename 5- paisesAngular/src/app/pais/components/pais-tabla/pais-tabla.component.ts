import { Component, Input, OnInit } from '@angular/core';
import { BusquedaPorPais } from '../../interfaces/buscarPorPais';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent {

   @Input() pais: BusquedaPorPais []=[];

}
