import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { User } from '../../domain';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User();
  changeData: FormGroup;
  public loggedIn: boolean = true;

  constructor(public router: Router, public http: HttpClient) {
    this.changeData = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
    this.changeData.valueChanges.subscribe(val => this.update(val));
  }

  ngOnInit() {

  }

  public login() {

    this.http.post('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/login',
      {
        email: this.user.email.toString(),
        password: this.user.password.toString()
      }
    ).subscribe(data => {
      console.log(data);
      if (data[0]['session_id'] != 401) {
        if(localStorage.getItem('session_id') !== null){
          localStorage.removeItem('session_id');
        }
        localStorage.setItem('session_id', data[0]['session_id']);
        this.router.navigate(['/dashboard']);
      }else {
        this.loggedIn = false;
        alert("Wrong email or password.")
      }
    });

  }




  public update(user: User) {
    this.user = user;
  }

}
