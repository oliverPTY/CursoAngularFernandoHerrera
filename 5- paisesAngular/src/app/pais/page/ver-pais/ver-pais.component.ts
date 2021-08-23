import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { BusquedaPorPais } from '../../interfaces/buscarPorPais';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {


  pais: BusquedaPorPais;

  constructor(
    private activeRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }
 
  ngOnInit(): void {

    this.activeRoute.params.pipe(
      switchMap((params)=> this.paisService.GetPaisporCodigo(params.id)),
      tap (console.log)
    )
    .subscribe(response =>{
     this.pais  = response
    })
    //this.activeRoute.params.subscribe(params =>{
      //this.paisService.GetPaisporCodigo(params.id).subscribe( pais =>{
        //console.log(pais);
      //})
    //})
  }

}
