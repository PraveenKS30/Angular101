import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
 
  photoUrl : string =''

  constructor(private photoService : PhotoService) { 
    /*this.photoService.getPhoto().subscribe((response)=>{
      this.photoUrl = response.urls.regular;
    })*/
  }

  getPhoto(){
    this.photoService.getPhoto().subscribe((response)=>{
      this.photoUrl = response.urls.regular;
    })

  }
  ngOnInit(): void {
  }


}
