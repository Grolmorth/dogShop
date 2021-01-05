import { ProductService } from './../../../services/product.service';
import { NavServiceService } from './../../../services/nav-service.service';
import { AfterContentInit, Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/services/product';
import { AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.scss']
})
export class CategoryDisplayComponent implements OnInit, AfterContentInit {
  rawList: AngularFireList<any>;
  productList: Product[] = [];
  productListAll: Product[] = [];
  categoryLink: string;
  categoryName: any;
  sub: any;
  constructor(private navServ: NavServiceService, private route: ActivatedRoute, private productService: ProductService, private router: Router) { }
  navigation: any;
  ngOnInit(): void {
    //subscribe route params
    this.sub = this.route.params.subscribe(params => {
      if (this.categoryLink && this.categoryLink !== params.categoryName) {
        location.reload()
      }
      this.categoryLink = params.categoryName;
      this.navServ.navlink.map(v => {
        if (v[1] === this.categoryLink) {
          this.categoryName = v[0];
          this.navigation = v[2];
        }
      });

    }), (err) => console.error(err);
    if (this.categoryName === undefined) {
      this.router.navigateByUrl('page-not-found');
    }

  }
  ngAfterContentInit() {
    this.loadAllFromCategory();
  }
  loadProducts(subCategory: string) {
    this.rawList = this.productService.getProductListWithFilter('product/' + this.categoryLink + '/' + subCategory, 100000, 0)
    this.fillProductList();
  }
  fillProductList() {
    this.rawList.valueChanges().subscribe(val => {
      this.productList = val;
      this.productListAll = this.productListAll.concat(this.productList);
    })

  }
  loadAllFromCategory() {
    this.clearProductList();
    for (const category of this.navigation) {
      this.loadProducts(category[1])
    }
  }
  clearProductList() {
    this.productList = [];
    this.productListAll = [];
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
