import { ACCOUNTS_ROUTES } from './onthehouse-routes';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomainModule } from '../domain';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MakePostComponent } from './make-post/make-post.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DomainModule,
        RouterModule.forChild(ACCOUNTS_ROUTES),
        ReactiveFormsModule
    ],
    declarations: [
        HomeComponent,
        AboutUsComponent,
        DashboardComponent,
        SignupComponent,
        LoginComponent,
        MakePostComponent
    ],
    exports: [
        
    ]
})

export class OnTheHouseModule {

}
