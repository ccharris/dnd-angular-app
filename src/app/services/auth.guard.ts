import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.afAuth.authState.map(auth => {
      if (!auth) {
        // If they are not authenticated make them login
        console.log('Access denied by AuthGuard, routing to login');
        this.router.navigateByUrl('login');
        return false;
      } else {
        // If they are authenticated, allow them to proceed
        return true;
      }
    });

  }
}