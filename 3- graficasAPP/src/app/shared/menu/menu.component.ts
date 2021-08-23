import { Component, OnInit } from '@angular/core';


interface menu {
  ruta: string,
  texto: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  constructor() { }

  menu: menu[] = [
    {ruta: 'graficas/barras' ,texto: 'Barras'},
    {ruta: 'graficas/barrasDobles' ,texto: 'Barras Dobles'},
    {ruta: 'graficas/dona' ,texto: 'Dona'},
    {ruta: 'graficas/donaHTTP' ,texto: 'Dona HTTP'},
  ]
}
