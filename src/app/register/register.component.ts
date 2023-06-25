import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  signupUsers:any[]=[];
  signupobj:any={
    name:'',
    emailId:'',
    password:''
  }
  constructor(private r:Router){}
  signUp(){
    this.signupUsers.push(this.signupobj)
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers))
    this.r.navigate(['/login'])
    
  }

}
