import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routes: Routes = [];

@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot([

     {
       path: '',
       component: BasicosComponent,
       pathMatch: 'full'
     },
     {
       path:'numeros',
       component:NumerosComponent,

     },
     {
       path:'no-Comunes',
       component: NoComunesComponent
     },
     {
      path: 'ordenar',
      component: OrdenarComponent
     },
     {
       path: '**',
       redirectTo: '',
     }
       
    ])
  ]
})
export class AppRoutingModule { }
