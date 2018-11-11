import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})

export class LogoutComponent {


    constructor(public router: Router, public http: HttpClient){}

    public logout(){
        this.http.post('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/logout',
        {
          session_id: localStorage.getItem('session_id')
        }
      ).subscribe(data => console.log(data));

      localStorage.removeItem('session_id');
      this.router.navigate(['/']);
    }

}