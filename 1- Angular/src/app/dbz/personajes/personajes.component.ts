import { Component, Input } from '@angular/core';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})


export class PersonajesComponent {

  constructor (private dbzService: dbzService){}

  //@Input('data') personajesSBZ: PersonajesComponent[] = [];

  get personajesDBZ(){
    return this.dbzService.personajes;
  }



}
