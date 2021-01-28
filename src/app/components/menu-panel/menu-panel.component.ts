import { AuthService } from 'src/app/services/auth.service';

import { ActivatedRoute } from '@angular/router';
import { Component, DoCheck, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements DoCheck, OnInit {

  shopItems = 0;
  cartVisible = false;
  showContent = true;
  user: User = {
    uid: '',
    email: '',
    emailVerified: false,
    displayName: '',
    photoURL: ''
  }

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    if (this.route.snapshot['_routerState'].url === "/cart") {
      this.showContent = false;
      this.cartVisible = false;
    }
    else {
      this.showContent = true;
    }
    //het number of items
    if (localStorage.getItem('cart')) {
      this.shopItems = JSON.parse(localStorage.getItem('cart')).length;
    }
    // hide cart if there is 0 items
    if (this.shopItems === 0 && this.cartVisible === true) {
      setTimeout(() => {
        this.cartVisible = false;

      }, 1000
      );
    }
    if (localStorage.getItem('user')) {
      this.getUserData();
    } else { this.resetUser() }
  }
  toggleCart() {
    this.cartVisible = !this.cartVisible;
  }
  getUserData() {

    const localStorageUser = JSON.parse(localStorage.getItem('user'))
    this.user.uid = localStorageUser.uid;
    this.user.email = localStorageUser.email;
    this.user.emailVerified = localStorageUser.emailVerified;
    this.user.displayName = localStorageUser.displayName;
    this.user.photoURL = localStorageUser.photoURL;
  }
  resetUser() {
    this.user = {
      uid: '',
      email: '',
      emailVerified: false,
      displayName: '',
      photoURL: ''
    }
  }
  logout() {
    this.authService.signOut();
    this.resetUser();
  }
}
