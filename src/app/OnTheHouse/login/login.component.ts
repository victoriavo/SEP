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
  // wantRemember: boolean;
  public loggedIn: boolean = true;

  constructor(public router: Router, public http: HttpClient) {
    this.changeData = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
    this.changeData.valueChanges.subscribe(val => this.update(val));

    // this.wantRemember = false;
  }

  ngOnInit() {
    // if (localStorage.getItem('email')) {
    //   this.changeData.get('email').setValue(localStorage.getItem('email'));
    //   document.getElementById('remember').setAttribute("checked", "");
    //   this.remember();
    // }
  }

  public login() {
    //  if (this.changeData.valid) {
    //    localStorage.setItem('email', this.user.email);
    //  }

    this.http.post('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/login',
      {
        email: this.user.email.toString(),
        password: this.user.password.toString()
      }
    ).subscribe(data => {
      console.log(data);
      if (data[0]['session_id'] != 401) {
        localStorage.removeItem('session_id');
        localStorage.setItem('session_id', data[0]['session_id']);
        this.router.navigate(['/dashboard']);
      }else {
        this.loggedIn = false;
      }
    });
  }




  public update(user: User) {
    this.user = user;
  }

}
