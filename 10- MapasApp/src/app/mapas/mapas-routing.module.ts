import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarcadoresComponent } from './pages/marcadores/marcadores.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
       path: 'full' , component: FullScreenComponent
      },
      {
        path: 'zoom', component: ZoomRangeComponent
      },
      {
        path: 'marcadores', component: MarcadoresComponent
      },
      {
        path: 'propiedades', component: PropiedadesComponent
      },
      {
        path: '**',
        redirectTo: 'full'
      }
             ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapasRoutingModule { }
