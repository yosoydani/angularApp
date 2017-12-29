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

const appRoutes: Routes = [
  { path: '',                component: HomeComponent },
  { path: 'products',        component: ProductsComponent },
  { path: 'checkout',        component: CheckoutComponent },
  { path: 'order-success',   component: OdersSuccessComponent },
  { path: 'shopping-cart',   component: ShoppingCartComponent },
  { path: 'my/orders',       component: MyOrdersComponent },
  { path: 'login',           component: LoginComponent },
  { path: 'admin/orders',       component: MgOrdersComponent },
  { path: 'admin/products',     component: MgProductsComponent },
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
