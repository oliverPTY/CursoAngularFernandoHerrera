import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { paisSmall } from '../../interface/paises.interface';
import { PaisesService } from '../../service/paises.service';
import {  switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selectorpage',
  templateUrl: './selectorpage.component.html',
  styleUrls: ['./selectorpage.component.css']
})
export class SelectorpageComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: PaisesService
            
    ) { }
  //--llenar selectores

  regiones: string[] = [];
  paises: paisSmall[] = [];
  //fronteras: string[] = [];
  fronteras: paisSmall[] = [];
  cargando: boolean = false

  miFormulario: FormGroup = this.fb.group({
    region: ['',[Validators.required]],
    paises: ['',[Validators.required]],
    frontera: ['', [Validators.required]]
  })

  ngOnInit(): void {

    this.regiones = this.service.regiones; 
    
    //--cuando cambie la region
      this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap( (_) =>{
          this.miFormulario.get('paises').reset('');
          this.cargando = true;
        }
        ), 
       switchMap(region => this.service.buscarRegion(region))
       ).subscribe(pais =>{       
        this.paises = pais;
        this.cargando = false;
      })


      
      this.miFormulario.get('paises')?.valueChanges
      .pipe(
        tap( () =>{
          this.miFormulario.get('frontera')?.reset('');
          this.cargando = true;
        }
        ),
        switchMap(codePais => this.service.buscarFronteras(codePais)),
        switchMap(codealpha => this.service.getPaisPorCodigo(codealpha?.borders! ))
      )
      .subscribe( paiss => {
        console.log(paiss);
        this.fronteras = paiss;
        this.cargando = false;
      } )




    // this.miFormulario.get('region')?.valueChanges.subscribe(region =>{
    //   console.log(region);

    //   this.service.buscarRegion(region).subscribe(pais =>{
    //     this.paises = pais;
    //     console.log(this.paises);
        
    //   })
      
    // })
  }
  guardar(){
    console.log(this.miFormulario.value)
  }

}
