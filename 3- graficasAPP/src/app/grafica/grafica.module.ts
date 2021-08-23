import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficaRoutingModule } from './grafica-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoblesComponent } from './pages/barras-dobles/barras-dobles.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHTTPComponent } from './pages/dona-http/dona-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDoblesComponent,
    DonaComponent,
    DonaHTTPComponent,
    GraficaBarraComponent
  ],
  imports: [
    CommonModule,
    GraficaRoutingModule,
    ChartsModule
  ]
})
export class GraficaModule { }
