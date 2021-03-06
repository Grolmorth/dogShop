import { Subscription } from 'rxjs';
import { UserDataService } from './../../../services/user-data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent implements OnInit, OnDestroy {
  sub: Subscription;
  constructor(private userData: UserDataService, private location: Location) { }
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
  ngOnInit(): void {
    this.sub = this.userData.getUserData().valueChanges().subscribe(val => {
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

    })
  }
  onSubmit(form) {
    this.userData.setUserData(form.value);
    this.location.back();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
