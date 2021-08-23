import { HttpClient } from '@angular/common/http';
import { createHostListener } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { pipe , of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { auth } from '../interface/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseurl: string = environment.apiEnpoint;
   
  private _auth: auth | undefined;

  get auth(){
    return {...this._auth};
  } 


  constructor(private http: HttpClient) { }



  
    verificaAutenticacion(): Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }
    
    return this.http.get<auth>(`${this.baseurl}/usuarios/1`)
    .pipe(
      map(auth =>{
        this._auth = auth
         return true;
      })
    );
  }



  login(){
    return this.http.get<auth>(`${this.baseurl}/usuarios/1`)
    .pipe(
      tap(auth =>{
        this._auth = auth
       } 
      ),
      tap(auth =>{localStorage.setItem('token',auth.id)})  
      );
  }




}
