import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { heroe, Publisher } from '../../intefaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
  img{
    width: 100%;
    border-radius: 10px
  }
  `
  ]
})
export class AgregarComponent implements OnInit {


  titulo: string = '';

  publicador = [
  {
    id: 'DC Comics',
    nombre: 'DC-Comics'
  },
  {
    id: 'Marvel Comics',
    nombre: 'Marvel-Comics'
  }
   ]

   heroe: heroe =
     {
      superhero:  '',
      publisher:  Publisher.DCComics,
      alter_ego:  '',
      first_appearance: '',
      characters:   '',
      alt_img:  '',
     }
     

  constructor(private heroeService: HeroesService
    , private activateRouter: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      this.titulo= 'Agregar Heroe'
      return;
    }
    
    this.titulo= 'Editar Heroe'
    this.activateRouter.params.pipe(switchMap(params => this.heroeService.Heroeid(params.id))
    ).subscribe(response => {
      this.heroe = response;
      
    })


  }


  guardar(){

    if(this.heroe.superhero.trim().length===0){
      return
    }

    if(this.heroe.id){
      this.heroeService.actualizarHeroe(this.heroe).subscribe(response =>{
        this.mostrarMensajeSnackBar('Registro Actualizado!!');
        
      })

    }else{
      this.heroeService.agregarHeroe(this.heroe).subscribe(response =>{
        this.router.navigate(['/heroes/editar',response.id])
        this.mostrarMensajeSnackBar('Heroe Creado!!');
      })
    }
    
   
    
  }


  borrar(){
     
  const dialog =  this.dialog.open(ConfirmarComponent,{
     width: '300px',
     data: this.heroe,
   });

   dialog.afterClosed().subscribe(response =>{
     
    if(response === true){
      this.heroeService.borrarHeroe(this.heroe.id!).subscribe(response =>{
        this.router.navigate(['/heroes'])
       })
    }
     
   })

  }

  mostrarMensajeSnackBar(mensaje: string ){
    this.snackBar.open(mensaje, '',{
      duration: 2000
    });
  }

}
