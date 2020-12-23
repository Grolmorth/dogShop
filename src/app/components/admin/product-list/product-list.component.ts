import { NavServiceService } from './../../../services/nav-service.service';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product';
import { AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  categoryList: [{ name: string, link: string, index: number }] = [{ name: '', link: '', index: 0 }];
  listRaw: AngularFireList<any>;
  categories: [{ display: boolean }] = [{ display: false }];

  constructor(private productService: ProductService, private navService: NavServiceService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(): void {
    //get raw list from firestore
    this.listRaw = this.productService.getProductList('/product');
    //create category list item with name and link for every category in firebase
    this.listRaw.valueChanges().subscribe(list => {

      let m = 0;
      list.map(item => {
        for (let n = 0; n < this.navService.navlink.length; n++) {
          if (item.key === this.navService.navlink[n][1]) {
            this.categoryList[m] = {
              name: this.navService.navlink[n][0].toString(),
              link: this.navService.navlink[n][1].toString(),
              index: m
            };

            this.categories[m] = { display: false }
            m++;
            break;
          }
        }
      });
    });
  }


  loadCategory(index) {
    this.categories[index].display = !this.categories[index].display;
  }

}
