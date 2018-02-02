import { ShoppingCartService } from './shopping-cart.service';
import { ProductService } from './product.service';
import { CategoryService } from './category.service';
import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MgOrdersComponent } from './mg-orders/mg-orders.component';
import { MgProductsComponent } from './mg-products/mg-products.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OdersSuccessComponent } from './oders-success/oders-success.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { PruebasComponent } from './pruebas/pruebas.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule} from 'angular5-data-table';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';

const appRoutes: Routes = [
  { path: '',                component: ProductsComponent },
  { path: 'products',        component: ProductsComponent },
  { path: 'login',           component: LoginComponent },
  { path: 'shopping-cart',   component: ShoppingCartComponent },

  { path: 'checkout',        component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'order-success',   component: OdersSuccessComponent, canActivate: [AuthGuard] },
  { path: 'my/orders',       component: MyOrdersComponent, canActivate: [AuthGuard] },
  {
    path: 'admin/orders',
    component: MgOrdersComponent,
    canActivate: [AuthGuard, AdminAuthGuard ]
  },
  {
    path: 'admin/products/new',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/products/:id',
    component: ProductFormComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  {
    path: 'admin/products',
    component: MgProductsComponent,
    canActivate: [AuthGuard, AdminAuthGuard]
  },
  { path: '**',              component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    MgOrdersComponent,
    MgProductsComponent,
    HomeComponent,
    ProductsComponent,
    CheckoutComponent,
    OdersSuccessComponent,
    LoginComponent,
    PruebasComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DataTableModule,
    RouterModule.forRoot(
      appRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
