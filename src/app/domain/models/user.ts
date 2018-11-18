import {Vote} from './vote';

export class User{
    userName?:string;
    email?:string;
    password?:string;
    school?:string;
    voteValues?:Vote[];
}