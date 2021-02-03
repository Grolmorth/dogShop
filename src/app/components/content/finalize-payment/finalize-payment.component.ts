import { PurchaseService } from './../../../services/purchase.service';
import { Purchase } from './../../../models/purchase';
import { UserDataService } from 'src/app/services/user-data.service';
import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  saveUserData: boolean = true;
  paid: boolean = true;
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

  constructor(private userData: UserDataService, private purchaseService: PurchaseService) { }
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
        if (this.user.address) {
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

    if (this.saveUserData) {
      // save user address to db if user has agrees
      this.userData.setUserData(form.value);
    }
    const purchase: Purchase = {
      date: new Date().toLocaleString(),
      paid: this.paid,
      sent: false,
      totalValue: this.cartTotal,
      userEmail: this.user.email,
      userUid: this.user.uid,
      userAddress: form.value,
      purchaseList: this.cartItems
    }
    this.purchaseService.pushOrder(purchase);
    localStorage.removeItem('cart');


  }
}
