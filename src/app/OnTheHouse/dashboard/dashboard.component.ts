import { Component, OnInit } from '@angular/core';
import { Post, PostRepository } from '../../domain';
import { Router, ActivatedRoute } from '@angular/router';
// import { Posts } from '../../mock-posts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // posts = PostRepository.get;
  private post: Post;
  private postId: number;

  // post_one: Post = {
  //   organization:'Mustang Heroes',
  //   eventName:'Justice Week Racial Inequality Awareness',
  //   location:'HTSC Forum',
  //   startTime:'2018-11-20 12:30:00', 
  //   endTime: '2018-11-20 13:00:00',
  //   description:'Engage in a panel discussion & get free lunch.',
  //   votes: -2
  // };

  //private posts: Post[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postRepository : PostRepository,
  ) {}

  public ngOnInit() {
    //this.postRepository.getAll()
    //.subscribe(x => this.onPostsLoaded(x));
    this.activatedRoute.params.subscribe(x => this.onRouteParams(x));
  }

  private onRouteParams(params: any) {
    this.postId = +params.id;
    if (params.id) {
      this.postRepository.getById(this.postId).subscribe(x => this.onPostLoaded(x));
    } 
  }

  private onPostLoaded(post: Post) {
    this.post = post;
  }

  private save() {
    if (this.postId) {
      this.postRepository.update(this.postId, this.post).subscribe();
    }
  }


  // private onPostsLoaded(posts: Post[]){
  //  this.posts = posts;
  // }

  private createNewPost(){
    this.router.navigateByUrl('/post');
  }

  // private upvote(post: Post){
  //   post['votes'] += 1;
  // }

  // private downvote(post: Post){
  //   post['votes'] -= 1;
  //   if (post['votes'] == -5) {
  //     this.posts.splice(this.posts.indexOf(post), 1);
  //   }
  // }
}
