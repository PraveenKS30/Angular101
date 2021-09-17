import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts =[
  {
    title : "My first post",
    details : "travel"
  },
  {
    title : "My second post",
    details: "office"
  },
  {
    title : "My third post",
    details : "home"
  }
]
}
