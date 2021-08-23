import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BusquedaPorPais } from '../interfaces/buscarPorPais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

private apiUrl: string = 'https://restcountries.eu/rest/v2/name';

//instancia de http
constructor(private http:HttpClient) { }

//metodo para buscar por nombre de pais
BuscarPais( termino:string):Observable<BusquedaPorPais[]>{

  const params = `${this.apiUrl}/${termino}`;
 return this.http.get<BusquedaPorPais[]>(params);
}


//buscar por capital de pais
private ApiKey : string = 'https://restcountries.eu/rest/v2/capital';

BuscarCapital(termino: string):Observable<BusquedaPorPais[]> {
  const parametrosCapital = `${this.ApiKey}/${termino}`
  return this.http.get<BusquedaPorPais[]>(parametrosCapital);
}


//busqueda por codigo de pais

private ApiKeyCodePais = 'https://restcountries.eu/rest/v2/alpha';
GetPaisporCodigo (id: string):Observable<BusquedaPorPais> {
  const GetcodePais = `${this.ApiKeyCodePais}/${id}`
  return this.http.get<BusquedaPorPais>(GetcodePais);
}


//Busqueda por region de pais
private apiKeyRegion = 'https://restcountries.eu/rest/v2/region';
buscarPorRegion(region: string):Observable<BusquedaPorPais[]> {

  const httpParams = new HttpParams()
  .set('fields','name;capital;alpha2Code;population;alpha2Code;flag')

  const getRegion = `${this.apiKeyRegion}/${region}`;
  return this.http.get<BusquedaPorPais[]>(getRegion, {params: httpParams});
}




}
