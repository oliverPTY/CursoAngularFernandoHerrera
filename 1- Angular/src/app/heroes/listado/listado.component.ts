import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
 heroes: string[] = ['spiderman', 'iroman','thor','batman'];
 heroeDelete: string = '';



 borrarHeroe(){
  this.heroeDelete = this.heroes.shift() || '';
 }

  


}

