import { AppUser } from './../models/app-user';
import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
//  user: firebase.User;
  // user$: Observable<firebase.User>;
  appUser: AppUser;
  constructor(private  auth: AuthService) {
  //  afAuth.authState.subscribe(user => this.user = user);
    // this.user$ = auth.user$;
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
   }

  logout() {
    this.auth.logout();
  }


}
