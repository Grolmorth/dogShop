
import { UserDataService } from './../../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  sub: Subscription;
  user: User = {
    uid: '',
    email: '',
    emailVerified: false,
    displayName: '',
    photoURL: '',
    address: {
      name: '',
      surname: '',
      country: '',
      city: '',
      zipCode: '',
      street: '',
      streetNumber: '',
      phone: ''
    }
  }

  constructor(private userData: UserDataService) { }

  ngOnInit(): void {
    this.sub = this.userData.getUserData().valueChanges().subscribe(val => {
      this.user = val;
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
