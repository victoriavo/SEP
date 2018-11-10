import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../domain';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public newUser = new User();
  changeData: FormGroup;
  public success: boolean = false;
  public failure: boolean = false;

  constructor(public router: Router, public http: HttpClient) {
    this.changeData = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      reemail: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      school: new FormControl(null, [Validators.required]),
    });
    this.changeData.valueChanges.subscribe(val => this.update(val));

  }

  ngOnInit() {

  }

  public signup() {
    this.http.post('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/signup',
      {
        name: this.newUser.userName.toString(),
        email: this.newUser.email.toString(),
        password: this.newUser.password.toString(),
        school: this.newUser.school.toString()
      }
    ).subscribe(data => {console.log(data);
      if (data['valid'] == 0) {
        this.failure = true;
      } else {
        this.success = true;
        setTimeout((router: Router) => {
          this.router.navigate(['/login']);
        }, 3000);  //3s
      }
    });

  }

  public remember() {

  }

  public update(user: User){
    this.newUser = user;
    this.changeData.get('reemail').setValidators([Validators.required, Validators.email, Validators.pattern(this.newUser.email)]);
  }

}
