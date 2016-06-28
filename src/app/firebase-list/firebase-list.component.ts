import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable , FirebaseListObservable } from 'angularfire2';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'firebase-list',
  templateUrl: './firebase-list.component.html' 
  , directives: [ROUTER_DIRECTIVES ] 
})
export class FirebaseListComponent{

  items: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/messages');
  }
  // addField(newName: string, newEmail: string) {
  //   this.items.push({ name: newName, email: newEmail });
  // }
  update(key: string, newName: string, newEmail: string) {
    this.items.update(key, { name: newName, email: newEmail });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }
}
