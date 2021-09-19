import { Component } from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence()
  enteredText=""

  onChangeInput(event:any){
    //console.log(event.target.value)
    this.enteredText = event.target.value
    

  }
}
