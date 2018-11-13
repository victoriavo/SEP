import { Injectable } from "@angular/core";
import { Post } from './../models/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class PostRepository {

    protected endpoint = 'api/posts';
    
    constructor(
        protected httpClient: HttpClient
    ) {}

    public getAll(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(this.endpoint)
            .catch(x => this.handleException(x));
    }

    public getById(id: number): Observable<Post> {
        return this.httpClient
            .get<Post>(`${this.endpoint}/${id}`)
            .catch(x => this.handleException(x));
    }

    public add(item: Post): Observable<Post> {
        return this.httpClient
            .post(this.endpoint, item)
            .catch(x => this.handleException(x));
    }

    public update(id: number, product: Post): Observable<Post> {
        return this.httpClient
            .put(`${this.endpoint}/${id}`, product)
            .catch(x => this.handleException(x));
    }

    public delete(id: number): Observable<void> {
        return this.httpClient
            .delete<void>(`${this.endpoint}/${id}`)
            .catch(x => this.handleException(x));
    }

    protected handleException(exception: any) {
        var message = `${exception.status} : ${exception.statusText}\r\n${exception.body.error}`;
        alert(message);
        return Observable.throw(message);
    }
}