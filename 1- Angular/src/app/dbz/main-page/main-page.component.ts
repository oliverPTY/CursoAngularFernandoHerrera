import { Component, OnInit } from '@angular/core';
import { PersonajesInterface } from '../interfaces/dbz.interfaces';
import { PersonajesComponent } from '../personajes/personajes.component';
import { dbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

 
  nuevo: PersonajesInterface = {
    nombre:'Maestro rochy',
    Poder:15000
  }


  //get personajesSBZ(): PersonajesInterface[]{
   //  return this.dbzService.personajesSBZ;
  //} 



 //constructor (private dbzService: dbzService){}



}
