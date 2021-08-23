import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private serviceLogin: AuthService) { }

  ngOnInit(): void {

  }

  login(){
    this.serviceLogin.login().subscribe(response =>{
      
      if(response.id){
        this.router.navigate(['./heroes'])
        console.log(response);
        
      }
      
    })
  }

}
