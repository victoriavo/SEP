import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Post } from '../../domain';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.css']
})
export class MakePostComponent{

  private newPost = new Post();
  private _posts : Post[] = [];
  private user_id : number = 0;
  private local_location : string = "";
  private success : boolean = true;
  private errorMessage : string = "";

  constructor(public router: Router, public http: HttpClient) {
    if(localStorage.getItem('session_id') !== null && localStorage.getItem('session_id') != '0'){
      this.http.get('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/session/' + localStorage.getItem('session_id')
      ).subscribe(data => { console.log(data)
          this.user_id = data[0]['user_id'];
          this.local_location = data[0]['location'];
      });
    }else{
        this.user_id = 0;
        this.local_location = "";
    }
  }

  @Input()
  public get posts(): Post[] {
      return this._posts;
    }
    public set posts(value: Post[]) {
      if (this._posts !== value) {
        this.postsChange.emit(value);
      }
      this._posts = value;
    }

  @Output()
  postsChange : EventEmitter<Post[]> = new EventEmitter<Post[]>();

  private addPost(){
      this.posts.push(this.newPost);

      console.log(this.newPost);

      this.http.post('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/addpost',
      {
        user_id: this.user_id,
        organization: this.newPost.organization,
        event_name: this.newPost.eventName,
        local_location: this.local_location,
        location: this.newPost.location,
        start_time: this.newPost.startTime,
        end_time: this.newPost.endTime,
        description: this.newPost.description
      }
    ).subscribe(output => {
      console.log(output);
        if(output['valid'] == 0){
          this.success = false;
          this.errorMessage = output['error'];
        }
        if(this.errorMessage != ""){
          alert(this.errorMessage);
        }
        else{
          this.router.navigate(['/dashboard']);
        }
    });

  }
}
