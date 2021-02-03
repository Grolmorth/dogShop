
import { Purchase } from './../models/purchase';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private firebase: AngularFireDatabase) { }


  pushOrder(purchase: Purchase) {
    // getting user data, to push purchase in to user history
    const userUid: string = JSON.parse(localStorage.getItem('user')).uid;
    this.firebase.object(`users/${userUid}/shoppingHistory/${new Date}`).set(purchase);

    this.firebase.list('purchasees/').push(purchase);
  }
}
