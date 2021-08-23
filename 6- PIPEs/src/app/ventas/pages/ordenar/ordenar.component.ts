import { Component, OnInit } from '@angular/core';
import { color, Heroe } from '../../interface/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {


  Desicion: boolean = false;
   
  Heroes: Heroe[] = [
    {
      Nombre: 'Superman',
      Vuela: true,
      Color: color.Azul
    },
    {
      Nombre: 'Batman',
      Vuela: false,
      Color: color.Negro
    },
    {
      Nombre: 'Robin',
      Vuela: false,
      Color: color.Verde
    },
    {
      Nombre: 'Linterna Verde',
      Vuela: true,
      Color: color.Verde
    }

  ];


    cambiar(){
    this.Desicion = true;
  }
   

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }

  ordenarPor: string = '';



}
