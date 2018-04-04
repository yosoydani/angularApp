import { AppUser } from './../models/app-user';
import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';
import { ShoppingCartService } from '../shopping-cart.service';

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
  shoppingCartItemCount: number ;
  constructor(private  auth: AuthService,private shoppingCartService: ShoppingCartService) {
    //  afAuth.authState.subscribe(user => this.user = user);
    // this.user$ = auth.user$;
  }

  ngOnInit(): void {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    const cart = this.shoppingCartService.getCart();
    cart.then(
      cart$ => {
        cart$.snapshotChanges().subscribe(cartsub => {
          this.shoppingCartItemCount = 0 ;
          // tslint:disable-next-line:forin
          for (const productId in cartsub.payload.val().items) {
          this.shoppingCartItemCount += cartsub.payload.val().items[productId].quantity;
        }
      });
      }
    );
  }
  logout() {
    this.auth.logout();
  }


}
