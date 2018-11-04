import { ACCOUNTS_ROUTES } from './onthehouse-routes';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DomainModule } from '../domain';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DomainModule,
        RouterModule.forChild(ACCOUNTS_ROUTES),
        ReactiveFormsModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        
    ]
})

export class OnTheHouseModule {

}
