import { User } from './user';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import { Location } from '@angular/common';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private location: Location,
    private firebase: AngularFireDatabase

  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }
  signIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['login']);
        });
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }
  signUp(email, password) {
    console.log(email, password)
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }
  setUserData(user) {
    const userRef: AngularFireObject<any> = this.firebase.object(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    userRef.update(userData);
  }
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.refresh();
    });
  }
  refresh(): void {
    location.reload();
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }
  googleAuth() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider()).then(() => {
      this.location.back();
    });
  }
  authLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.location.back();
        });
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error);
      });
  }

}
