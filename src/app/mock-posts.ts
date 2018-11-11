import { Post } from './domain/index';

export const POSTS: Post[] = [
    {
        organization:'Mustang Heroes',
        eventName:'Justice Week Kick-Off',
        location:'Flagpole',
        startTime:'2018-11-20 12:30:00', 
        endTime: '2018-11-20 13:00:00',
        description:'Come get free Union coffee & donuts. Learn about upcoming events.',
        votes: 34
    },
    {
        organization:'Mustang Heroes',
        eventName:'Justice Week Human Trafficking Awareness',
        location:'HTSC Ballroom',
        startTime:'2018-11-20 12:30:00', 
        endTime: '2018-11-20 13:00:00',
        description:'Watch 8 Days Film & get free dinner.',
        votes: 20
    },
    {
        organization:'Mustang Heroes',
        eventName:'Justice Week Income Inequality Awareness',
        location:'HTSC Ballroom',
        startTime:'2018-11-20 12:30:00', 
        endTime: '2018-11-20 13:00:00',
        description:'Play a simulation game & get snacks.',
        votes: 15
    },
    {
        organization:'Mustang Heroes',
        eventName:'Justice Week Racial Inequality Awareness',
        location:'HTSC Forum',
        startTime:'2018-11-20 12:30:00', 
        endTime: '2018-11-20 13:00:00',
        description:'Engage in a panel discussion & get free lunch.',
        votes: -2
    }
]