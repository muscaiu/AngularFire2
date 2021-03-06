import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import {Router} from '@angular/router';
import {FormBuilder, ControlGroup, Validators} from '@angular/common';

import {BasicValidators} from '../shared/basicValidators'

@Component({
  moduleId: module.id,
  selector: 'formular',
  templateUrl : 'new-user.component.html'
})

export class NewUserComponent {
  form: ControlGroup ;
  items: FirebaseListObservable<any>;

  constructor(af: AngularFire, 
              private _router: Router,
              fb:FormBuilder
              ) { 
    this.form = fb.group({
        newName:['', Validators.required], 
        newEmail:['', BasicValidators.email], 
        newOra:[],
        newEta:[], 
        newSesso:[], 
        newLivelloLingua:[] 
    })
    this.items = af.database.list('/hr/users')
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