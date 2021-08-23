import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
     

    this.miForm.reset({
      nombre: 'Queso',
      precio: 5.99,
      existencia: 5
    })



  }
  // miForm: FormGroup = new FormGroup({
  //   nombre: new FormControl('Jamon'),
  //   precio: new FormControl(2.99),
  //   existencia: new FormControl(1500),
  // })

  miForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]     ],
    precio: [ , [Validators.required, Validators.min(1)]   ],
    existencia: [, [Validators.required, Validators.min(1)]   ]
  })

 
  campoNoEsValido(campoNombre: string){
   return this.miForm.controls[campoNombre].errors && this.miForm.controls[campoNombre].touched
  }

  info: any =
     {
      nombre:  '',
      precio:  '',
 
     }


  guardar(){
     
    if(this.miForm.invalid){
      this.miForm.markAllAsTouched(); 
      return ;
    }

    //console.log(this.miForm.value);
    this.info.nombre = this.miForm.controls.nombre.value
    console.log(this.info);
    
    this.miForm.reset();
    
    
    
  }



}
