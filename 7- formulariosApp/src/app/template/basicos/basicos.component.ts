import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miForm') miForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  // Guardar(miForm: NgForm){
  //   console.log(miForm.value);
  // }

  ValorInicial = {
    producto:'Jamon cerrano'
  }


  Guardar(){
    console.log('posteo Correcto',this.miForm);
    this.miForm.resetForm();
  }


  nombreValido(){
    return this.miForm?.controls.producto?.invalid
     && 
     this.miForm?.controls.producto?.touched
  }

  precioValido(){
    
  // return  this.miForm?.controls.precio?.touched
  // &&
  return this.miForm?.controls.precio?.value < 0
  }
}
