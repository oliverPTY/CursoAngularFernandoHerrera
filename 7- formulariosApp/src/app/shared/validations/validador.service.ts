import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadorService {

  constructor() { }
 
  
public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
noPuedeSerOlivher(control: any): ValidationErrors | null{
  const valod: string = control.value?.trim().toLowerCase(); 
    if(valod === 'olivher'){
      return {ValorRepetido: true}
     }
     return null;
   }

   campoIguales(campo1: string, campo2: string){
    return (formGruop: AbstractControl): ValidationErrors | null => {
    const pass1 = formGruop.get(campo1)?.value;
    const pass2 = formGruop.get(campo2)?.value;

    if(pass1 !== pass2){
      formGruop.get('password2')?.setErrors({noIguales: true});
      return {noIguales: true}
    }
    
    formGruop.get('password2')?.setErrors(null);
    return null
   }
   }
   

}
