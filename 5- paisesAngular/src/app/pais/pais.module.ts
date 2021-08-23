import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './page/capital/capital.component';
import { PaisComponent } from './page/pais/pais.component';
import { RegionComponent } from './page/region/region.component';
import { VerPaisComponent } from './page/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';



@NgModule({
  declarations: [
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerPaisComponent,
    PaisTablaComponent,
    BusquedaComponent
  ],
  exports:[
    CapitalComponent,
    PaisComponent,
    RegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
