import { ShoppingCartService } from './../shopping-cart.service';
import { Product } from './../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product: Product;
  // tslint:disable-next-line:no-input-rename
  @Input('show-actions') showActions = true;
  // tslint:disable-next-line:no-input-rename
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    // this.cartService.getOrCreateCartId();
    this.cartService.addToCart(this.product);
  }
  removeFromCart() {
    // this.cartService.getOrCreateCartId();
    this.cartService.removeFromCart(this.product);
  }
  getQuantity () {
    if (!this.shoppingCart) return 0;
    const item = this.shoppingCart.itemsMap[this.product.key];
    return item ? item.quantity : 0 ;
  }



}
