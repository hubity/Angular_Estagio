import { Component, OnInit } from '@angular/core';
import {Users} from './users';
import {AuthService} from './auth.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(loginForm: NgForm){
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token', token.userName);
      console.log('login sucessful');
    }else{
      console.log('login not sucessful');
    }


  }
}
