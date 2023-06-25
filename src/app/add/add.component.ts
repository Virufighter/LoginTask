import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  addTasks:any[]=[];
  addobj:any={
    title:'',
    description:'',
    status:''
  }
  constructor(private r:Router){}
  addTask(){
    this.addTasks.push(this.addobj)
    localStorage.setItem('signupUsers',JSON.stringify(this.addTasks))
    this.r.navigate(['/view'])
    
  }


}
