import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //property binding
  name='' 

  constructor(){
    this.name ="sample name"
  }
 
 //event binding -- method
  onButtonClick(){
    console.log("You clicked a button!")
  }
}
