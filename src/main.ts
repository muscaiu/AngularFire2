import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app  
  defaultFirebase({
    apiKey: "AIzaSyCK4SPSKz6vVaq-4ktZI2xW29ThboDuoKM",
    authDomain: "angular2cloud.firebaseapp.com",
    databaseURL: "https://angular2cloud.firebaseio.com",
    storageBucket: "angular2cloud.appspot.com",
  })
]);