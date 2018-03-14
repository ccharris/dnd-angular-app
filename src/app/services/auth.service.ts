import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  constructor(
    private afAuth: AngularFireAuth, 
    private router: Router,    
  ) { 
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  registerUserWithFirebase(form) {
    this.afAuth.auth.createUserWithEmailAndPassword(form.email, form.password).then( authedUserInfo => {
      this.router.navigateByUrl('/');
    }).catch( err => {
      console.log('Error creating user, error:', err );
    });
  }
  login(form){
    this.afAuth.auth.signInWithEmailAndPassword(form.email, form.password).then ( res => {
      this.router.navigateByUrl('/');
    }).catch( err => {
      console.log('Error: ', err);
    });
  }
  logout(){
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/');
  }
}
