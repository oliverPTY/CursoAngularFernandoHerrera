import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorsService } from 'src/app/shared/validations/email-validators.service';
import { ValidadorService } from 'src/app/shared/validations/validador.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


   //----------------------------------------------------------------------------
   //---manera de hacerlo en este archivo

//  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
//  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


//  noPuedeSerOlivher(control: any){
//     const valod: string = control.value?.trim().toLowerCase();
//      if(valod === 'olivher'){
//       return {ValorRepetido: true}
//      }
//      return null;
//    }

// miform: FormGroup = this.fb.group({
//   nombre: ['',[Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
//   email: ['',[Validators.required, Validators.pattern(this.emailPattern)]],
//   username: ['',[Validators.required,noPuedeSerOlivher]]
// })


//-------------------------------------------------------


   //-VALIDACION DE NOMBRE Y EMAIL EN "shared/Validations/Validations.service"------------------

   constructor(private fb: FormBuilder, private serviceValidacion: ValidadorService, private servicioEmail: EmailValidatorsService) { }
   


   miform: FormGroup = this.fb.group({
     nombre: ['',[Validators.required, Validators.pattern(this.serviceValidacion.nombreApellidoPattern)]],
     email: ['',[Validators.required, Validators.pattern(this.serviceValidacion.emailPattern)], [this.servicioEmail] ],
     username: ['',[Validators.required,this.serviceValidacion.noPuedeSerOlivher]],
     password: ['',[Validators.required, Validators.minLength(6)]],
     password2: ['',[Validators.required]]
   },{
     validators: [this.serviceValidacion.campoIguales('password','password2') ]
   })

    
   get EmailErrorMSJ(): string{
    const error = this.miform.get('email')?.errors;
    if(error?.required){
      return 'El Email es Obligatorio'
    }else if (error?.pattern){
    return 'El formato del email no es el correcto'
    }else if(error?.emailTomado){
    return 'El Email, ya fue tomado'
    }

    return ''

   }


   ngOnInit(): void {
    this.miform.reset({
      nombre: 'Oliver Aparicios',
      email: 'oliver50715@gmail.com',
      username: 'Oliver507',
      password:'123456',
      password2:'123456'
    })
  }


   InputNoValido(campo: string){
    return this.miform.get(campo)?.invalid 
    && this.miform.get(campo)?.touched
   }

   submitForm(){
    console.log(this.miform.value)
     this.miform.markAllAsTouched();
   }
   
 


}
