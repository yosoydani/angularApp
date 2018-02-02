import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { AppUser } from './models/app-user';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    const itemRef = this.db.object('user/' + user.uid);
    itemRef.update({
      name: user.displayName,
      email: user.email
     });
  }

  get(uid: string): Observable<any> {
    return this.db.object('user/' + uid).valueChanges();
  }
}