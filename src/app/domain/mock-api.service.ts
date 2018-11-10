import { Observable } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockApi implements InMemoryDbService {
    createDb(): any {
        return {
            posts: [
                {
                    organization:'Mustang Heroes',
                    eventName:'Justice Week Kick-Off',
                    location:'Flagpole',
                    startTime:'2016-01-17T:08:44:29+0100', 
                    endTime: '2016-01-17T:08:44:29+0100',
                    description:'Come get free Union coffee & donuts. Learn about upcoming events.'
                },
                {
                    organization:'Mustang Heroes',
                    eventName:'Justice Week Human Trafficking Awareness',
                    location:'HTSC Ballroom',
                    startTime:'2016-01-17T:08:44:29+0100', 
                    endTime: '2016-01-17T:08:44:29+0100',
                    description:'Watch 8 Days Film & get free dinner.'
                },
                {
                    organization:'Mustang Heroes',
                    eventName:'Justice Week Income Inequality Awareness',
                    location:'HTSC Ballroom',
                    startTime:'2016-01-17T:08:44:29+0100', 
                    endTime: '2016-01-17T:08:44:29+0100',
                    description:'Play a simulation game & get snacks.'
                },
                {
                    organization:'Mustang Heroes',
                    eventName:'Justice Week Racial Inequality Awareness',
                    location:'HTSC Forum',
                    startTime:'2016-01-17T:08:44:29+0100', 
                    endTime: '2016-01-17T:08:44:29+0100',
                    description:'Engage in a panel discussion & get free lunch.'
                }
            ]
        };
    }

}
