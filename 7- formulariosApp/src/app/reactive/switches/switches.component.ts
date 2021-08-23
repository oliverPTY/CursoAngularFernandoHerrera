import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  miForm: FormGroup = this.fb.group({
    genero: ['M',Validators.required],
    notificaciones: [Validators.required],
    condiciones: [false,Validators.requiredTrue]
  })

  persona: any ={
    genero: 'F',
    notificaciones: true,
    condiciones: true
  }

  ngOnInit(): void {
    this.miForm.reset({...this.persona,
    //  condiciones:true
    });
    

    this.miForm.valueChanges.subscribe(form =>{
    delete form.condiciones;
    this.persona = form
    })


  }


  guardar(){
   let personaValues=this.miForm.value;
   delete personaValues.condiciones;
   this.persona = personaValues;
   console.log(this.persona);
   
    
    
    
  }


}
