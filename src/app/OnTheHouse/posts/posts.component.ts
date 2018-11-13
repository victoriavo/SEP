import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../domain';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})

export class PostsComponent {
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

}