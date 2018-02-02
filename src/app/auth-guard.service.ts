import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router, RouterStateSnapshot } from '@angular/router';
import	'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  // devulve true si esta autorizado false si no
  canActivate(route, state: RouterStateSnapshot ) {
    // console.log('Can ativate implentation');
    return this.auth.user$.map(user => {
      if (user) { return true; }
      console.log(state.url);
      this.router.navigate(['/login'], { queryParams: {returnUrl: state.url }});
      return false;
    });

  }


}
