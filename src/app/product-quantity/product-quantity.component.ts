import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent  {

  @Input('product') product: Product;
  // tslint:disable-next-line:no-input-rename
  @Input('shopping-cart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) {
  }
  addToCart() {
    // this.cartService.getOrCreateCartId();
    this.cartService.addToCart(this.product);
  }
  removeFromCart() {
    // this.cartService.getOrCreateCartId();
    this.cartService.removeFromCart(this.product);
  }

}
