import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post, User, Vote } from '../../domain';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Number } from 'core-js/library/web/timers';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})

export class PostsComponent {
    color: string;
    private newPost = new Post();
    private posts : Post[] = [];
    private user: User;
    private vote : Vote;
    private votes: Vote[] = [];
    private numPosts : number;
    private parsedJSON : Array<Object>[] = [];
    private user_id: string = "";
    private newNum: number = 0;
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
                this.posts[i].location = data[i]['local_location'];
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
                        this.secondFunction();
                    }
                });
            }
            
        
      }

      public secondFunction(){
        this.http.post('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/getvotes', {
            user_id: this.user_id
        }).subscribe(data => { 
            console.log(data)
            this.numPosts = Object.keys(data).length;
            for(var j = 0; j < this.posts.length; j++){
                this.vote = new Vote();
                this.vote.post = this.posts[j];
                this.vote.vote = 0;
                for(var i = 0; i < this.numPosts; i++){
                    if(this.posts[j].id == data[0]['num'][j]['post_id']){
                        if(data[0]['num'][j]['upvote'] == 1){
                            this.vote.vote = 1;
                        }else{
                            this.vote.vote = -1;
                        }
                    }
                }
                this.votes[j] = this.vote;
            }
            
        
        });
      }

      public upvote(post: Post){
        this.http.post('http://ec2-18-188-176-205.us-east-2.compute.amazonaws.com/vote', {
            post_id: post.id,
            user_id: this.user_id,
            upvote: "true"
            
        }).subscribe(data => { console.log(data)
            this.router.navigate(['/dashboard']);
            if(data[0]['valid'] == 1){
                for(var j = 0; j < this.posts.length; j++){
                    if(this.posts[j].id == post.id){
                        this.newNum = parseInt(this.posts[j].votes.toString()) + 1;
                        this.posts[j].votes = this.newNum;
                        //document.getElementById('upvote').style.color = "green";
                        //this.color = "green";
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
            if(data[0]['valid'] == 1){
                for(var k = 0; k < this.posts.length; k++){
                    if(this.posts[k].id == post.id){
                        this.newNum = parseInt(this.posts[k].votes.toString()) - 1;
                        this.posts[k].votes = this.newNum;
                    }
                }
            }
        });

    }



}