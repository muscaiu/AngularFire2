import { provideRouter, RouterConfig } from '@angular/router';

import {FirebaseListComponent} from './firebase-list/firebase-list.component';
import {FormularComponent} from './formular/formular.component';
import {Profile} from './profile';

export const routes: RouterConfig = [
   { path: 'firebase', component: FirebaseListComponent },   
   { path: 'formular', component: FormularComponent },           
   //{ path: 'profile', component: Profile },         
//   { path: 'heroes', component: HeroListComponent },
//   { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];