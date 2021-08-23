import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'graficas',
  loadChildren: () => import('./grafica/grafica.module').then(m=> m.GraficaModule)
  },
  {
    path: '**',
    redirectTo: 'graficas'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
