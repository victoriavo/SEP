import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const ACCOUNTS_ROUTES : Routes = [
    { path: '', component: HomeComponent},
    { path: 'null', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutUsComponent},

];