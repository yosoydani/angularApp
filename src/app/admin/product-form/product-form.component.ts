import { CategoryService } from './../../category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  categories$: Observable<any[]>;
  product = {};
  id;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.categories$ = categoryService.getAll();

     this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).take(1).subscribe(p => this.product = p);
// console.log(this.product);
    }
  }
  save(product) {
  //  console.log(product);
    if (this.id) {
      this.productService.update(this.id, product.value);
    } else {
      this.productService.create(product.value);
      product.reset();
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (confirm('Are you sure you wants to delete this')) {
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    }
    // console.log(this.id);
  }

}
