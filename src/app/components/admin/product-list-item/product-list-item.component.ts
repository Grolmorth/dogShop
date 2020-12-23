import { ProductService } from './../../../services/product.service';
import { NavServiceService } from 'src/app/services/nav-service.service';
import { AngularFireList } from '@angular/fire/database';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() category: { name: string, link: string }
  constructor(private navService: NavServiceService, private productService: ProductService) { }
  categoryList: [{ name: string, link: string, index: number }] = [{ name: '', link: '', index: 0 }];
  listRaw: AngularFireList<any>;

  ngOnInit(): void {
    this.getCategoryList()
  }
  getCategoryList(): void {
    //get raw list from firestore

    this.listRaw = this.productService.getProductList('/product/' + this.category.link);
    //create category list item with name and link for every category in firebase
    this.listRaw.snapshotChanges().subscribe(list => {
      let m = 0;
      list.map(item => {
        for (let n = 0; n < this.navService.navlink.length; n++) {
          if (this.category.link === this.navService.navlink[n][1]) {
            for (let p = 0; p < this.navService.navlink[n][2].length; p++) {
              if (item.key === this.navService.navlink[n][2][p][1]) {
                this.categoryList[m] = {
                  name: this.navService.navlink[n][2][p][0],
                  link: this.navService.navlink[n][2][p][1],
                  index: m
                };
                m++;
                break;
              }
            }
            // this.categories[m] = { display: false }

            break;
          }
        }
      });
    });
  }
}
