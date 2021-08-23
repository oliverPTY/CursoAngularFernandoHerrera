import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  constructor(private http: HttpClient) { }
   
  GetGrafica(){
    const apiKey = 'http://localhost:3000/grafica'
    return this.http.get(apiKey);
  }

  getUserRedesDona(){
    return this.GetGrafica()
    .pipe(
      delay(1500),
     map( data =>{
      const labels = Object.keys(data);
      const value = Object.values(data);
      return {labels, value}
     })
    )
  }


}
