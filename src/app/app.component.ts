import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable , FirebaseListObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
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
  `,
  styleUrls: ['app.component.css']
})

export class AppComponent {
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
//   item: FirebaseObjectObservable<any>;

//   constructor(af: AngularFire) {
//     this.item = af.database.object('/item');
//     // this.item = af.database.object('/item', { preserveSnapshot: true });
//     // this.item.subscribe(snapshot => console.log(snapshot.key()));
//     //const absolute = af.database.list('https://<your-app>.firebaseio.com/items');
//   }
//   save(newName: string) {
//     this.item.set({ name: newName });
//   }
//   update(newSize: string) {
//     this.item.update({ size: newSize });
//   }
//   delete() {
//     this.item.remove();
//   }
// }