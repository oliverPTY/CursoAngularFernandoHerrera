import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'src/app/auth/interface/auth.interface';
import { AuthService } from 'src/app/auth/service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
    .container{
      margin: 10px
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor(private router:Router , private authService: AuthService) { }

   get auth(){
     return this.authService.auth;
   }


  ngOnInit(): void {

    

  }

  salir(){
    
    this.router.navigate(['./auth/login'])
  }

}
