import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-cart/' + cartId);
  }

  private getProduct(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCartId() {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      return cartId;
    }
    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart (product: Product) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getProduct(cartId, product.key);
    item$.snapshotChanges().take(1).subscribe( item => {
      item$.update({ product: product, quantity: (item.payload.val()) ? item.payload.val().quantity + 1 : 0 });
    });
  }
}