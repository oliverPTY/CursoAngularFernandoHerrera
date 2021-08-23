import { Component, OnInit } from '@angular/core';

interface persona{
  nombre: string,
  favoritos: favorito[],
}

interface favorito{
  id: number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {


  persona: persona = {
    nombre: 'Oliver',
    favoritos: [
      {id: 1,nombre:'Fifa21'},
      {id: 2,nombre:'Call of Duty'}
      ]
  }


  nuevoJuego: string = '';




  constructor() { }

  ngOnInit(): void {
  }


  guardar(){
    console.log('Posteado');
    
  }

  Agregar(){

    const favorito: favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

   this.persona.favoritos.push(favorito)
   this.nuevoJuego = '';
  }

  eliminar(index: number){

    this.persona.favoritos.splice(index, 1);

  }

}
