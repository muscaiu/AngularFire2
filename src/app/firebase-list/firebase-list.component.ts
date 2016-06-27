import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable , FirebaseListObservable } from 'angularfire2';


@Component({
  //moduleId: module.id,
  selector: 'app-firebase-list',
  template: `
<input type="text" #newName />
<input type="text" #newEmail />
<button (click)="addField(newName.value, newEmail.value )">Add</button>

<!-- <button (click)="deleteEverything()">Delete All</button> -->

<div class= "container">
  <table class= "table table-hover table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of items | async">
        <td>{{ item.name }} 
            <input type="text" #updatename [value]="item.name" />
        </td>
        <td>
           {{ item.email }}
           <input type="text" #updateemail [value]="item.email" />
        </td>
        <td><button (click)="update(item.$key, updatename.value, updateemail.value)">Update</button></td>
        <td><button (click)="deleteItem(item.$key)">X</button></td>
      <tr>
    </tbody>
  </table>
</div>

`
})
export class FirebaseListComponent{

  items: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/messages');
  }
  addField(newName: string, newEmail: string) {
    this.items.push({ name: newName, email: newEmail });
  }
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
