import { Component, OnInit } from '@angular/core';


interface menuItem {
  ruta: string,
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  
  menuItem: menuItem[] = [
   {
     ruta:'/mapas/full',
     nombre:'FullScreen'
   },
   {
    ruta:'/mapas/zoom',
    nombre:'Zoom-Range'
  },
  {
    ruta:'/mapas/marcadores',
    nombre:'marcadores'
  },
  {
    ruta:'/mapas/propiedades',
    nombre:'propiedades'
  },
  ]

  ngOnInit(): void {
  }

}
