import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
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
  login(){}

  

}
