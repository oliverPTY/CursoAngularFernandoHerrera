import { Component, Input, OnInit } from '@angular/core';
import { heroe } from '../../intefaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {

  constructor() { }

   @Input() heroe!: heroe; 
}
