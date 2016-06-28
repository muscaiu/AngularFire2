import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import {Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'formular',
  templateUrl : 'formular.component.html'
})
export class FormularComponent {

  items: FirebaseListObservable<any>;

  constructor(af: AngularFire, private _router: Router) { 
    this.items = af.database.list('/messages')
   }

  addField(newName: string, 
           newEmail: string, 
           newOra: string,
           newEta: string,
           newSesso: string,
           newLivelloLingua: string           
           ){
            this.items.push({ 
              name: newName,
              email: newEmail,
              ora: newOra,
              eta: newEta,
              sesso: newSesso,
              livellolingua: newLivelloLingua,
          })
          this._router.navigate(['/firebase'])
  }
}