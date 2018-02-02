import { Product } from './../models/product';
import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-mg-products',
  templateUrl: './mg-products.component.html',
  styleUrls: ['./mg-products.component.css']
})
export class MgProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  sub: Subscription;
  tableResource: DataTableResource<Product>;
  itemCount: number;
  items: Product [] = [];

  constructor(ps: ProductService) {
      this.sub = ps.getAll().subscribe(product => {
      this.products = product;
      // console.log(this.products);
      this.initializeDataTable(product);
    });
  }

  private initializeDataTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({offset: 0})
    .then(items => this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);
  }

  filter(query) {
    const filterProducts = (query) ? this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
    this.products;
    this.initializeDataTable(filterProducts);
  }

  reloadItems(params) {
    if (!this.tableResource) return;
    this.tableResource.query(params)
    .then(items => this.items = items);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
   this.sub.unsubscribe();
  }

}
