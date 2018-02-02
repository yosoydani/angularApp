import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private userService: UserService) {

    this.user$ = afAuth.authState;
   }

   login() {
    console.log('Esta vivo');
    const Url = this.route.snapshot.queryParamMap.get('returnUrl')  || '/';
    localStorage.setItem('returnUrl', Url);
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

   logout() {
    console.log('Bye');
    this.afAuth.auth.signOut();
  }

  get appUser$(): Observable<AppUser> {
    return this.user$.switchMap(user => {
      // tslint:disable-next-line:curly
      if (user) return this.userService.get(user.uid);
      return Observable.of(null);
    });
  }
}
