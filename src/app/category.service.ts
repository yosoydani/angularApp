import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;


  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list('categories', ref => ref.orderByChild('name'));
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  getAll() {
    return this.items;
  }

}
