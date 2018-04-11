import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { ShoppingCart } from './models/shopping-cart';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }
 // Promise<AngularFireObject<SoppingCart>>
  async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    // console.log(cartId);
    return this.db.object('/shopping-carts/' + cartId).snapshotChanges().map( action => {
      const key = action.key;
      const items = action.payload.val().items;
      return new ShoppingCart(key, items);
    });
  }

  private getProduct(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      return cartId;
    }
    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart (product: Product) {
    this.updateQuantity(product, 1);
  }

  async removeFromCart (product: Product) {
    this.updateQuantity(product, -1);
  }

  private async  updateQuantity(product: Product, change: number) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getProduct(cartId, product.key);
    item$.snapshotChanges().take(1).subscribe( item => {
      item$.update({ product: product, quantity: (item.payload.val()) ? item.payload.val().quantity + change : 0 });
    });
  }
}
