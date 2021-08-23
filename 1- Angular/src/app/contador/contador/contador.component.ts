
import {Component} from '@angular/core';

@Component({

    selector: 'contador-app',
    template:`
    <h1>{{title}}</h1>
    <h3>La base es: {{base}}</h3>
     
    <button (click)="Acumular(base)">+ {{base}}</button>
    
    <span>{{numero}}</span>
    
    <button (click)="Acumular(-base)">- {{base}}</button>
    
    `
})
export class contadorComponent {
    title: string = 'Contador APP';
    numero:number = 10;
    base:number = 5;
  
    Acumular(valor:number){
         this.numero+=valor
    }
  
    
}