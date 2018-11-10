import { Component } from '@angular/core';
import { Post } from './domain/index';

@Component({
    selector: 'app',
    template: '<router-outlet></router-outlet>'
})

export class AppComponent {
    private posts: Post[];
    private post: Post;

    constructor() {
        this.post =
        {
             'organization':'Mustang Heroes',
             'eventName':'Justice Week Kick-Off',
             'location':'Flagpole',
             'startTime':'2016-01-17T:08:44:29+0100', 
             'endTime': '2016-01-17T:08:44:29+0100',
             'description':'Come get free Union coffee & donuts. Learn about upcoming events.'
        };
        this.posts = [];
        this.posts.push(this.post);
     }

}