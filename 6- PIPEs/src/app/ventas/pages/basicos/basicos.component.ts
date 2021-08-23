import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'Oliver';
  nombreUpper: string = 'OLIVER';
  nombreCompleto: string = 'OliVeR aPariCiO'


  date: Date = new Date;


}
