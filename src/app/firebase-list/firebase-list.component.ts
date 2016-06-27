import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable , FirebaseListObservable } from 'angularfire2';


@Component({
  //moduleId: module.id,
  selector: 'app-firebase-list',
  template: `
<ul>
  <li *ngFor="let item of items | async">
    <input type="text" #updatesize [value]="item.text" />
    <button (click)="update(item.$key, updatesize.value)">Update</button>
    <button (click)="deleteItem(item.$key)">Delete</button>
  </li>
</ul>

<input type="text" #newitem />
<button (click)="add(newitem.value)">Add</button>
<button (click)="deleteEverything()">Delete All</button>
`
})
export class FirebaseListComponent{

  items: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/messages');
  }
  add(newName: string) {
    this.items.push({ text: newName });
  }
  update(key: string, newSize: string) {
    this.items.update(key, { size: newSize });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }

}
