import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  sub: Subscription;
  filteredProducts: Product[] = [];
  category;
  constructor(
    route: ActivatedRoute,
    ps: ProductService
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
}
