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
  getProductList(path: string): AngularFireList<any> {
    return this.firebase.list(path);
  }
  getProductListWithFilter(path: string, priceMax?: number, priceMin?: number, brand?: string): AngularFireList<any> {
    if (!brand && priceMax || priceMin) {

      return this.firebase.list(path, ref => ref.orderByChild('price').endAt(priceMax).startAt(priceMin));
    } else if (brand) {

      return this.firebase.list(path, ref =>
        ref.orderByChild('price').endAt(priceMax).startAt(priceMin) && ref.orderByChild('company').equalTo(brand)

      );
    }
    else {
      return this.firebase.list(path);
    }

  }
  getProduct(category: string, subCategory: string): void {
    this.file = this.firebase.list('product/' + category + '/' + subCategory);
  }
  removeProduct(category: string, subCategory: string, id: number): void {
    let key: string;
    // getting product key
    this.firebase.list('product/' + category + '/' + subCategory, ref =>
      ref.orderByChild('id').equalTo(id)
    ).snapshotChanges().subscribe(val => {
      val.map(el => {
        key = el.key;
      })
      this.firebase.list('product/' + category + '/' + subCategory + '/' + key).remove();
    })


  }
  removeImage(ref: string): void {

    this.storage.ref(ref).delete();
  }
  replaceChar(val): string {
    let value = val.toLowerCase();
    const chars = [[' ', '-'], ['ą', 'a'], ['ę', 'e'], ['ć', 'c'], ['ł', 'l'], ['ń', 'n'], ['ó', 'o'], ['ś', 's'], ['ż', 'z'], ['ź', 'z'], [',', '-'], ['.', '-']];
    for (let n = 0; n < chars.length; n++) {
      value = value.replaceAll(chars[n][0], chars[n][1])
    }
    return value;
  }



}
