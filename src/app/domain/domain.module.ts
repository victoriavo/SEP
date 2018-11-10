import { MockApi } from './mock-api.service';
import { NgModule } from '@angular/core';
import { PostRepository } from './repositories/post-repository.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  imports: [
    HttpClientModule,
    InMemoryWebApiModule.forFeature(MockApi, {delay: 0})
  ],
  providers: [
    PostRepository
  ],
  exports: [
    
  ]
})
export class DomainModule { 
    
}