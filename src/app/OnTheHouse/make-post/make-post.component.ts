import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Post } from '../../domain';

@Component({
  selector: 'app-make-post',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.css']
})
export class MakePostComponent{

  private newPost = new Post();

  private _posts : Post[] = [];

  constructor(){
    
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
      this.newPost.location = "";
      console.log(this.newPost);
      this.posts.push(this.newPost);
      this.newPost = new Post();
      this.postsChange.emit(this.posts);

  }
}
