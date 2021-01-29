import { UserDataService } from 'src/app/services/user-data.service';
import { Product } from 'src/app/models/product';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-finalize-payment',
  templateUrl: './finalize-payment.component.html',
  styleUrls: ['./finalize-payment.component.scss']
})
export class FinalizePaymentComponent implements OnInit {
  formTemplate = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    streetNumber: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
  });
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
  isCorrect: boolean = false;
  constructor(private userData: UserDataService, private location: Location) { }
  cartItems: [Product];
  cartTotal: number;
  ngOnInit(): void {
    this.getCartFromStorage();
    this.getUserData();
  }
  getCartFromStorage() {
    if (localStorage.getItem('cart')) {
      this.cartItems = JSON.parse(localStorage.getItem('cart'))
      this.getTotalCost();
    }
  }
  getTotalCost() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.price * item.quantity);
    });
  }
  getUserData() {
    this.userData.getUserData().valueChanges().subscribe(val => {
      if (val.uid) {
        this.user = val;
        if (this.user.uid) {
          this.formTemplate.setValue({
            name: this.user.address.name,
            surname: this.user.address.surname,
            country: this.user.address.country,
            city: this.user.address.city,
            zipCode: this.user.address.zipCode,
            street: this.user.address.street,
            streetNumber: this.user.address.streetNumber,
            phone: this.user.address.phone,
          })
        }
      }
    })
  }
  onSubmit(form) {
    this.userData.setUserData(form.value);
  }
  correct() {
    this.isCorrect = true;
  }
}
