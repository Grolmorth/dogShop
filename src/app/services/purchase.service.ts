
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

  pushOrder(purchase: Purchase): void {
    // getting user uid, to push purchase in to user history
    const userUid: string = JSON.parse(localStorage.getItem('user')).uid;
    // save purchase for user
    this.firebase.list(`users/${userUid}/shoppingHistory`).push(purchase);
    // save purchase for admins
    this.firebase.list('before-shipment/').push(purchase);
  }
  orderComplete(purchase: Purchase): void {
    // change  sent status to true
    purchase.sent = true;
    //save sent date
    purchase.sentDate = new Date().toLocaleString();
    // save email of admin who worked on it
    purchase.sentBy = JSON.parse(localStorage.getItem('user')).email;
    // remove order from before-shipment
    // getting order key to remove it

    this.firebase.list('before-shipment/', ref =>
      ref.orderByChild('date').equalTo(purchase.date)
    ).snapshotChanges().subscribe(val => {
      let key: string;
      val.map(el => {
        key = el.key;
      });
      this.firebase.list('before-shipment/' + key).remove();
    })
    this.firebase.list('after-shipment/').push(purchase);
    // update client history
    this.firebase.list(`users/${purchase.userUid}/shoppingHistory`, ref =>
      ref.orderByChild('date').equalTo(purchase.date)
    ).snapshotChanges().subscribe(val => {
      let key: string;
      val.map(el => {
        key = el.key;
      });
      this.firebase.object(`users/${purchase.userUid}/shoppingHistory/${key}`).update(purchase);
    })

  }
}
