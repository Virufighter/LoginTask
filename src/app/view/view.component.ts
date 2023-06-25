import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {

  data:any=[{title:"task 1",description:"complete work",status:"completed"},{title:"task 2",description:"design",status:"progress"}]
}
