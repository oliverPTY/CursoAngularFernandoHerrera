import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: [

  ]
})
export class ConfirmarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

   
    
  }

  

  borrar(){
    this.dialogRef.close(true);
  }

  cancelar(){
    this.dialogRef.close();
  }

}
