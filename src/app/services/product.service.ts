import { Product } from './product';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productDetailList: AngularFireList<any>;
  product: Product;
  file: AngularFireList<any>;



  constructor(private firebase: AngularFireDatabase, private storage: AngularFireStorage) { }

  insertProductDetails(productDetails: Product) {
    this.product = productDetails;
    this.product.nameLink = this.replaceChar(productDetails.nameDisplay);
    this.product.categoryLink = this.replaceChar(productDetails.categoryDisplay);
    this.product.subCategoryLink = this.replaceChar(productDetails.subCategoryDisplay);
    this.firebase.list('product/' + this.product.categoryLink + '/' + this.product.subCategoryLink).push(this.product);

  }
  getProductDetailsList(path: string) {
    this.productDetailList = this.firebase.list(path);
  }
  getProduct(category: string, subCategory: string) {
    this.file = this.firebase.list('product/' + category + '/' + subCategory);
  }
  replaceChar(val) {
    let value = val.toLowerCase();
    const chars = [[' ', '-'], ['ą', 'a'], ['ę', 'e'], ['ć', 'c'], ['ł', 'l'], ['ń', 'n'], ['ó', 'o'], ['ś', 's'], ['ż', 'z'], ['ź', 'z']];
    for (let n = 0; n < chars.length; n++) {
      value = value.replaceAll(chars[n][0], chars[n][1])
    }
    return value
  }



}
