import { Component, OnInit } from '@angular/core';
import { Post, PostRepository } from '../../domain';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private posts: Post[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    //,
    //private postRepository : PostRepository
  ) {}

  public ngOnInit() {
  //  this.postRepository.getAll()
  //  .subscribe(x => this.onPostsLoaded(x));
  }

  //private onPostsLoaded(posts: Post[]){
  // this.posts = posts;
  //}

  private createNewPost(){
    this.router.navigateByUrl('/post');
  }
}
