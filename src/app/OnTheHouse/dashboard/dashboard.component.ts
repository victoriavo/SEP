import { Component, OnInit } from '@angular/core';
import { Post, PostRepository } from '../../domain';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  post_one: Post = {
    organization:'Mustang Heroes',
    eventName:'Justice Week Racial Inequality Awareness',
    location:'HTSC Forum',
    startTime:'2018-10-31C12:00:00', 
    endTime: '2018-10-31C12:00:00',
    description:'Engage in a panel discussion & get free lunch.',
    votes: -2
  };

  private posts: Post[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postRepository : PostRepository
  ) {}

  public ngOnInit() {
    //this.postRepository.getAll()
    //.subscribe(x => this.onPostsLoaded(x));
  }

  private onPostsLoaded(posts: Post[]){
   this.posts = posts;
  }

  private createNewPost(){
    this.router.navigateByUrl('/post');
  }

  private upvote(){
    this.post_one['votes'] += 1;

  }

  private downvote(){
    this.post_one['votes'] -= 1;
  }
}
