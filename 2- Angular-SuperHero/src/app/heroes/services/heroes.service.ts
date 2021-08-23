import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { heroe } from '../intefaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {


  private baseURL: string = environment.apiEnpoint;

  constructor(private http: HttpClient) { }

  getHeroes(){
    return this.http.get<heroe[]>(`${this.baseURL}/heroes`)
  }

  Heroeid(idHeroe: string){
    return this.http.get<heroe>(`${this.baseURL}/heroes/${idHeroe}`)
  }

  buscadorSugerencia( hero: string){
    const urlKey='heroes?q=';
    return this.http.get<heroe[]>(`${this.baseURL}/${urlKey}${hero}&_limit=6`)
  }


  agregarHeroe(heroe: heroe){
   return this.http.post<heroe>(`${this.baseURL}/heroes`,heroe)
  }

  actualizarHeroe(heroe: heroe){
    return this.http.put<heroe>(`${this.baseURL}/heroes/${heroe.id}`,heroe)
  }

  borrarHeroe(id: string){
    return this.http.delete<any>(`${this.baseURL}/heroes/${id}`)
  }
  

}
