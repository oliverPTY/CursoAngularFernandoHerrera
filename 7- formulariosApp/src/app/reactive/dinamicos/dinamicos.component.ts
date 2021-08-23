import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  FormDinamic: FormGroup = this.fb.group({
    Nombre: ['',[Validators.minLength(3), Validators.required] ],
    favorito: this.fb.array([
      ['Naruto', Validators.required],
      ['Call of Duty', Validators.required]
    ],Validators.required )
  })

  //formControl de input de nuevo juego fav
  nuevoFav: FormControl = this.fb.control('',Validators.required)


  //mostrar elementos de array
  get favarr(){
   return this.FormDinamic.get('favorito') as FormArray
  }


  //validacion para mensaje de error
  campoNoValido(nombreCampo : string){
    return this.FormDinamic.controls[nombreCampo].errors && 
    this.FormDinamic.controls[nombreCampo].touched
  }

    //guardar juego favorito
  agregarFav(){
    if(this.nuevoFav.invalid){
      return;
    }
    this.favarr.push(this.fb.control(this.nuevoFav.value, Validators.required));
    this.nuevoFav.reset();
  }

  //eliminar juego fav
  eliminar(indice: number){
     this.favarr.removeAt(indice);
  }
  


  Guardar(){
   if(this.FormDinamic.invalid){
     this.FormDinamic.markAllAsTouched();
     return;
    }
    
    console.log(this.FormDinamic.value);
    this.FormDinamic.reset();

  }


}
