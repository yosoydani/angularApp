import { AppUser } from './../models/app-user';
import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //  user: firebase.User;
  // user$: Observable<firebase.User>;
  appUser: AppUser;
  // shoppingCartItemCount: number ;
  cart$: Observable<ShoppingCart>;
  constructor(private  auth: AuthService,private shoppingCartService: ShoppingCartService) {
    //  afAuth.authState.subscribe(user => this.user = user);
    // this.user$ = auth.user$;
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }
  logout() {
    this.auth.logout();
  }


}
