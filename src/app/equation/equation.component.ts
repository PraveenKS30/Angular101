import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MathValidators } from '../math-validators';
import {delay} from 'rxjs/operators'

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {

  mathform = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer : new FormControl('')
  },
  [MathValidators.addition('answer','a','b')]
);

  constructor() { }

  get a(){
    return this.mathform.value.a;
  }

  get b(){
    return this.mathform.value.b;
  }

  randomNumber(){
    return Math.floor(Math.random()*10);
  }

  ngOnInit(): void {
    this.mathform.statusChanges.pipe(delay(200)).subscribe(value => {
      if(value === "INVALID"){
        return ;
      }

    this.mathform.setValue({
      a : this.randomNumber(),
      b : this.randomNumber(),
      answer :''
    })
    })
  }

}
