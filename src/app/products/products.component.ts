import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from '../shopping-cart.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  sub: Subscription;
  filteredProducts: Product[] = [];
  category: string;
  cart: any;
  constructor(
    route: ActivatedRoute,
    ps: ProductService,
    private shoppingCartService: ShoppingCartService 
  ) {
    
    this.sub = ps
    .getAll()
    .switchMap(p => {
      this.products = p;
      return route.queryParamMap;
    })
    .subscribe(params => {
      this.category = params.get('category');
      
      this.filteredProducts = (this.category) ?
      this.products.filter(p => p.category === this.category) :
      this.products;
    });
  }
  
  async ngOnInit() {
    this.sub= (await this.shoppingCartService.getCart()).valueChanges().subscribe(cart => this.cart = cart);
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
