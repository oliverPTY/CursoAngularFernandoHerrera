import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { heroe } from '../../intefaces/heroes.interface';
import { switchMap, tap } from "rxjs/operators";
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
   img{
     width: 100%;
     border-radius: 5px; 
   }
  `
  ]
})
export class HeroeComponent implements OnInit {

  constructor(private activerouter: ActivatedRoute,
    private service: HeroesService,
    private router: Router
    ) { }


  heroe!: heroe;
  idHeroe: string = '';

  ngOnInit(): void {
    
    this.activerouter.params.pipe(
      switchMap((params) => this.service.Heroeid(params.id))
    )
    .subscribe(response =>{
      this.heroe = response
      console.log(this.heroe);  
    })

    
  }


  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}
