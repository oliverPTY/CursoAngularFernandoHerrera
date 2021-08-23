import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { Pais, paisSmall } from '../interface/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }
  
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
   private _apiBaseUrl: string = 'https://restcountries.eu/rest/v2'

  get regiones(): string[]{
    return this._regiones;
  }


  buscarRegion(region: string): Observable<paisSmall[]>{
    const url = `${this._apiBaseUrl}/region/${region}?fields=alpha3Code;name`
   return this.http.get<paisSmall[]>(url);
  }

  buscarFronteras(alpha: string): Observable<Pais | null>{
    if(!alpha){
      return of(null);
    }

    const url = `${this._apiBaseUrl}/alpha/${alpha}`
    return this.http.get<Pais>(url);
  }


//--invento de fernando

  buscarFronterasSmall(alpha: string): Observable<paisSmall>{
    const url = `${this._apiBaseUrl}/alpha/${alpha}?fields=alpha3Code;name`
    return this.http.get<paisSmall>(url);
  }
  
  getPaisPorCodigo(borders: string[]){
    if(!borders){
      return of([]);
    }

    const peticiones = [];

    borders.forEach(codigo =>{
      const peticion = this.buscarFronterasSmall(codigo)
      peticiones.push(peticion);
    });

    return combineLatest(peticiones);


  }




}
