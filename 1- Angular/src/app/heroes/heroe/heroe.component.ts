import { Component } from "@angular/core";




@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent {
    nombre: string = 'IroMan';
    edad: number = 40;

    get CapitalizarNombre(): string{
        return this.nombre.toUpperCase();
    }


    BuscarNombre(): string {
    return `${this.nombre} - ${this.edad}`;
    }

   CambiarNombreHeroe():void{
    this.nombre='Spiderman';
   }

   CambiarEdadHeroe():void{
    this.edad=23;
   }

}