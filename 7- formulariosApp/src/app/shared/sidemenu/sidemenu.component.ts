import { Component, OnInit } from '@angular/core';


interface menuItem {
 texto: string;
 ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent  {

templateMenu: menuItem[] = [
  {
   texto: 'Basico',
   ruta: './template/basicos'
  },
  {
   texto: 'Dinamicos',
   ruta: './template/dinamicos'
  },
  {
    texto: 'Swtiches',
    ruta: './template/switches'
   }

]


reactiveMenu: menuItem[] = [
  {
   texto: 'Basico',
   ruta: './reactive/basicos'
  },
  {
   texto: 'Dinamicos',
   ruta: './reactive/dinamicos'
  },
  {
    texto: 'Swtiches',
    ruta: './reactive/switches'
   }

]

Validaciones: menuItem[] = [
  {
    texto: 'Registro',
    ruta: './Validaciones/registro'
  },
  {
    texto: 'Login',
    ruta: './Validaciones/login'
  }
]

}
