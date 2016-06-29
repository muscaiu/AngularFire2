import { provideRouter, RouterConfig } from '@angular/router';

import {FirebaseListComponent} from './firebase-list/firebase-list.component';
import {NewUserComponent} from './new-user.component';
import {Profile} from './profile';

export const routes: RouterConfig = [
   { path: 'users', component: FirebaseListComponent },   
   { path: 'users/new', component: NewUserComponent },           
   //{ path: 'profile', component: Profile },         
//   { path: 'heroes', component: HeroListComponent },
//   { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];