import { MockApi } from './mock-api.service';
import { NgModule } from '@angular/core';
import { PostRepository } from './repositories/post-repository.service';

@NgModule({
  imports: [

  ],
  providers: [
    PostRepository
  ]
})
export class DomainModule { 
    
}