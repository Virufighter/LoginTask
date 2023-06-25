import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email=""
  emailInvalid: boolean = false;
  emailRequired: boolean = false;
  emailInvalidFormat: boolean = false;

  onEmailChange() {
    this.emailRequired = this.email == null || this.email.trim() === '';
    this.emailInvalidFormat = !this.emailRequired && !this.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    this.emailInvalid = this.emailRequired || this.emailInvalidFormat;
  } 
 
  password=""
  passwordInvalid: boolean = false;
  passwordRequired: boolean = false;
  passwordMinLength: boolean = false;

  onPasswordChange() {
    this.passwordRequired = this.password == null || this.password.trim() === '';
    this.passwordMinLength = !this.passwordRequired && this.password.length < 8;
    this.passwordInvalid = this.passwordRequired || this.passwordMinLength;
  }
 
  logoutTime:any={}
  constructor(private r:Router){}
  login(){
    if(this.email=="alvin@gmail.com" && this.password=="alvin"){
      this.r.navigate(['/view'])

    }else{
      alert("wrong creditials")
    }
  }

  


}
