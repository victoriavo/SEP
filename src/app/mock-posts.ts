import { Post } from './domain/index';

export const POSTS: Post[] = [
    {
        organization:'Mustang Heroes',
        eventName:'Justice Week Kick-Off',
        location:'Flagpole',
        startTime:'2016-01-17T:08:44:29+0100', 
        endTime: '2016-01-17T:08:44:29+0100',
        description:'Come get free Union coffee & donuts. Learn about upcoming events.',
        votes: 34
    },
    {
        organization:'Mustang Heroes',
        eventName:'Justice Week Human Trafficking Awareness',
        location:'HTSC Ballroom',
        startTime:'2016-01-17T:08:44:29+0100', 
        endTime: '2016-01-17T:08:44:29+0100',
        description:'Watch 8 Days Film & get free dinner.',
        votes: 20
    },
    {
        organization:'Mustang Heroes',
        eventName:'Justice Week Income Inequality Awareness',
        location:'HTSC Ballroom',
        startTime:'2016-01-17T:08:44:29+0100', 
        endTime: '2016-01-17T:08:44:29+0100',
        description:'Play a simulation game & get snacks.',
        votes: 15
    },
    {
        organization:'Mustang Heroes',
        eventName:'Justice Week Racial Inequality Awareness',
        location:'HTSC Forum',
        startTime:'2016-01-17T:08:44:29+0100', 
        endTime: '2016-01-17T:08:44:29+0100',
        description:'Engage in a panel discussion & get free lunch.',
        votes: -2
    }
]