import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import {Router } from '@angular/router';

@Component({
  //moduleId: module.id,
  selector: 'formular',
  template: `
<div class="row">
  <div class="col-md-6 col-sm-6 well">   
    <div class="control-group">Name</div> 
        <input type="text" #newName placeholder="Nume Prenume" />
    <div class="control-group">Email</div> 
        <input type="text" #newEmail placeholder="Email" />
    <div class="control-group">Ora</div> 
        <input type="text" #newOra placeholder="Ora" />
    <div class="control-group">Eta</div>         
        <input type="text" #newEta placeholder="Eta" />
    <div class="control-group">Sesso</div>         
        <input type="text" #newSesso placeholder="Sesso" />
    <div class="control-group">LivelloLingua</div> 
        <input type="text" #newLivelloLingua placeholder="LivelloLingua" />
    <br>
        <button class="btn btn-success" (click)="addField(
                      newName.value, 
                      newEmail.value, 
                      newOra.value,
                      newEta.value, 
                      newSesso.value, 
                      newLivelloLingua.value 
                      )">
                      Save
        </button>
  </div>
</div>
`
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