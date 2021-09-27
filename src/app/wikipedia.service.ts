import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http : HttpClient) { }

  public search(){
    return this.http.get('https://reqres.in/api/users/2');
  }
}
