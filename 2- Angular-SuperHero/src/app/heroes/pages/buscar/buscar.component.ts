import { Component, OnInit } from '@angular/core';
import { heroe } from '../../intefaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  constructor(private service: HeroesService) { }

  termino: string = '';
  heroes: heroe[] = [];

  heroeSelect!: heroe | undefined ;

  ngOnInit(): void {
  }

  buscando(){
    this.service.buscadorSugerencia(this.termino).subscribe(
      heroes => this.heroes = heroes
    )
  }


  opcionSeleccionado(event: any){
    if(!event.option.value){ 
      this.heroeSelect = undefined;
      console.log('no hay nada');
      
     return;
   }
     const heros = event.option.value;
     this.termino = heros.superhero
      
     this.service.Heroeid(heros.id).subscribe(hero => this.heroeSelect = hero)
  }

}
