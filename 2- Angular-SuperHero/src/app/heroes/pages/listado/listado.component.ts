import { Component, OnInit } from '@angular/core';
import { heroe } from '../../intefaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
    mat-card{
     margin-top : 20px
    }
  `
  ]
})
export class ListadoComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  Heroes: heroe[] = []; 

  ngOnInit(): void {
    

    this.heroesService.getHeroes().subscribe(response =>{
      this.Heroes = response;
      
    })


  }

}
