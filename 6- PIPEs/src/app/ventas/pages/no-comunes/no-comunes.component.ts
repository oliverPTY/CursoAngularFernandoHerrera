import { Component, OnInit } from '@angular/core';
import { rejects } from 'node:assert';
import { resolve } from 'node:dns';
import { promise } from 'protractor';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {


  //i18NSelect
   
  nombre: string ='susana';
  genero: string = 'Femenino';

  invitacionMap = {
    'masculino':'Invitarlo',
    'Femenino':'Invitarla'
  }


  //i18NSPlural

  clientes: string [] = ['Oliver','Jose','Noel','Joel'];

  clientesMapa = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 cliente esperando',
    '=3': 'Tenemos 3 Clientes',
    'other': 'Tenemos Varios Clientes esperando'
  }

  cambiarCliente(){
    this.nombre='Oliver';
    this.genero = 'masculino';

  }

  borrarCliente(){

    this.clientes.pop();
    

  }


  //KEYVALUEPIPE

  persona = {
    nombre:'Oliver',
    Edad: 24,
    Direccion: 'Panama, Panama Oeste'
  }


  //ASYNC PIPE
  miObservable = interval(3000).pipe(tap(() => console.log('Observable')
  ));

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Tenemos Data de promesa')
    }, 3500);
  });

}
