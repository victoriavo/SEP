import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OnTheHouseModule } from './OnTheHouse/onthehouse.module';
import { FormsModule } from '@angular/forms';

const defaultRoute = '/home';

@NgModule({
    imports: [ 
        BrowserModule,
        OnTheHouseModule,
        RouterModule.forRoot([
            { path: '', redirectTo: defaultRoute, pathMatch: 'full' }
        ]), 
        HttpClientModule,
        FormsModule
    ], 
    declarations: [ 
        AppComponent 
    ], 
    bootstrap: [ 
        AppComponent 
    ],
    providers: [

    ]
})

export class AppModule {
}