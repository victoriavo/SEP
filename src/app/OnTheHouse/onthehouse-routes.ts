import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';

export const ACCOUNTS_ROUTES : Routes = [
    { path: '', component: HomeComponent},
    { path: 'null', component: HomeComponent},
    { path: 'home', component: HomeComponent}
];