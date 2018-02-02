import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;


  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list('/products');
    this.items = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  create(product) {
    console.log(product);
    return this.itemsRef.push(product);
  }

  getAll() {
    return this.items;
  }

  get(productId: string) {
    return this.db.object('/products/' + productId).valueChanges();
  }

  update(productId: string, product: {}) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId: string) {
    return this.db.object('products/' + productId).remove();
  }

}
