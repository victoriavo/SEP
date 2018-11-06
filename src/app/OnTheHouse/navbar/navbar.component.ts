import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

public loggedIn:boolean;
public name:string;

    @Input() textcolor: string;

    constructor(public router: Router, public http: HttpClient) {}

    ngOnInit(){
        this.loggedIn = false;
        
        // if(localStorage.getItem('session_id') !== null && localStorage.getItem('session_id') != '0'){
        //     this.http.get('http://ec2-18-216-113-131.us-east-2.compute.amazonaws.com/session/' + localStorage.getItem('session_id')
        //     ).subscribe(data => { //console.log(data)
        //         if(data['valid'] == 1){
        //             this.loggedIn = true;
        //             this.name = data['name'];
        //         }else{
        //             this.loggedIn = false;
        //             localStorage.removeItem('session_id');
        //         }
        //     });
        // }else{
        //     this.loggedIn = false;
        // }
  }

}