import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FieldsetModule } from 'primeng/fieldset';
import { MayusculaPipe } from './pipe/mayuscula.pipe';
import { VolarHeroe } from './pipe/Heroes.pipe';
import { OrdenarPipe } from './pipe/ordenar.pipe';



@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    MayusculaPipe,
    VolarHeroe,
    OrdenarPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FieldsetModule
    
  ],
  exports:[
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ]
})
export class VentasModule { }
