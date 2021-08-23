import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }


  items: MenuItem[];

  ngOnInit(): void {

    this.items = [
      {
        label:'Pipes de Angular',
        icon:'pi pi-chart-bar',
        items:[
          {
           label:'Textos y Fechas',
           icon: 'pi pi-align-left',
           routerLink: '/',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-sort-numeric-down',
            routerLink:'numeros'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-angle-double-up',
            routerLink: 'no-Comunes'
          }
        ]
      },

      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        routerLink: 'ordenar',
      }
  ];
  


  }


  

}
