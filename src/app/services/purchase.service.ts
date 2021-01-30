
import { Purchase } from './../models/purchase';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }


  pushOrder(purchase: Purchase) {

    this.firebase.list('purchasees/').push(purchase);
  }
}
