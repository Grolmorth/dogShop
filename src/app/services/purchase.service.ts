
import { Purchase } from './../models/purchase';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';



@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private firebase: AngularFireDatabase) { }

  getOrder(path: string): AngularFireList<Purchase> {
    return this.firebase.list(path);
  }

  pushOrder(purchase: Purchase) {
    // getting user uid, to push purchase in to user history
    const userUid: string = JSON.parse(localStorage.getItem('user')).uid;
    // save purchase for user
    this.firebase.list(`users/${userUid}/shoppingHistory`).push(purchase);
    // save purchase for admins
    this.firebase.list('before-shipment/').push(purchase);
  }
}
