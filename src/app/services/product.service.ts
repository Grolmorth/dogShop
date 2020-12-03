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

    this.firebase.list('product/' + productDetails.category + '/' + productDetails.subCategory).push(productDetails);
  }
  getProductDetailsList(path:string) {
    this.productDetailList = this.firebase.list(path);


  }


}
