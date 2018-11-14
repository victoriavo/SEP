import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../domain';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Number } from 'core-js/library/web/timers';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})

export class PostsComponent {
    private newPost = new Post();
    private posts : Post[] = [];
    private numPosts : number;
    private parsedJSON : Array<Object>[] = [];
    private user_id: string = "";
    private newNum: number = 0;
    private newNum2: string = "";
    
      constructor(public router: Router, public http: HttpClient){
        
      }
    
      ngOnInit(){
        this.http.put('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/getposts', {

        } 
        ).subscribe(data => { 
            console.log(data)
            this.numPosts = Object.keys(data).length;
            for(var i = 0; i < this.numPosts; i++){
                this.posts[i] = new Post();
                this.posts[i].organization = data[i]['organization'];
                this.posts[i].eventName = data[i]['event_name'];
                this.posts[i].location = data[i]['location'];
                this.posts[i].startTime = data[i]['start_time'];
                this.posts[i].endTime = data[i]['end_time'];
                this.posts[i].description = data[i]['description'];
                this.posts[i].votes = data[i]['vote_count'];
                this.posts[i].id = data[i]['post_id'];
            }
        
        });
            
            if(localStorage.getItem('session_id') !== null && localStorage.getItem('session_id') != '0'){
                this.http.get('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/session/' + localStorage.getItem('session_id')
                ).subscribe(data => { console.log(data)
                    if(data[0]['valid'] == 1){
                        this.user_id = data[0]['user_id'];
                    }
                });
            }
      }

      public upvote(post: Post){
        this.http.post('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/vote', {
            post_id: post.id,
            user_id: this.user_id,
            upvote: "true"
            
        }).subscribe(data => { console.log(data)
            this.router.navigate(['/dashboard']);
            if(data['valid'] == 1){
                for(var j = 0; j < this.posts.length; j++){
                    if(this.posts[j].id == post.id){
                        this.newNum = parseInt(this.posts[j].votes.toString()) + 1;
                        this.posts[j].votes = this.newNum;
                    }
                }
            }
        });

    }

    public downvote(post: Post){
        this.http.post('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/vote', {
            post_id: post.id,
            user_id: this.user_id,
            upvote: "false"
            
        }).subscribe(data => { console.log(data)
            this.router.navigate(['/dashboard']);
            if(data['valid'] == 1){
                for(var k = 0; k < this.posts.length; k++){
                    if(this.posts[k].id == post.id){
                        this.newNum = parseInt(this.posts[k].votes.toString()) - 1;
                        this.posts[k].votes = this.newNum
                    }
                }
            }
        });

    }



}