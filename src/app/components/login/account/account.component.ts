
import { UserDataService } from './../../../services/user-data.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

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
    this.userData.getUserData().valueChanges().subscribe(val => {
      this.user = val;
    })
  }

}
