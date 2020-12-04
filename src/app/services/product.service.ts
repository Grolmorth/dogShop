import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDetailList: AngularFireList<any>;
  product: any


  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  insertProductDetails(productDetails) {

    const category = this.replaceChar(productDetails.category.toLowerCase());
    const subCategory = this.replaceChar(productDetails.subCategory.toLowerCase());
    this.firebase.list('product/' + category + '/' + subCategory).push(productDetails);

  }
  getProductDetailsList(path: string) {
    this.productDetailList = this.firebase.list(path);
  }
  replaceChar(val) {
    let value = val;
    const chars = [[' ', '-'], ['ą', 'a'], ['ę', 'e'], ['ć', 'c'], ['ł', 'l'], ['ń', 'n'], ['ó', 'o'], ['ś', 's'], ['ż', 'z'], ['ź', 'z']];
    for (let n = 0; n < chars.length; n++) {
      value = value.replaceAll(chars[n][0], chars[n][1])

    }
    return value
  }



}
