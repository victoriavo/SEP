import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(
    public http: HttpClient,
    route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ){

    //this.getAllRatings(); 
  }
 
  // public getAllRatings(){
  //   this.http.get('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/testuser')
  //     .subscribe(data => {
  //     console.log(data);
  
  //   });
  // }
}