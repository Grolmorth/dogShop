import { NavServiceService } from './../../../services/nav-service.service';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from 'src/app/services/product';
import { AngularFireList } from '@angular/fire/database';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit, DoCheck {

  productList: Product[] = [];
  categoryList: any;
  categorySelected: string;
  subCategoryList: any;
  subCategorySelected: string;
  rawList: AngularFireList<any>;
  maxPrice: number = 10000000;
  minPrice: number = 0;


  constructor(private productService: ProductService, private navService: NavServiceService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }
  ngDoCheck(): void {
    // get subcategory list when picking category

    this.getSubCategoryList()
  }

  getCategoryList(): void {
    this.categoryList = this.navService.navlink.map(category => {
      return category
    })
  }
  getSubCategoryList(): void {
    this.navService.navlink.map(category => {
      if (category[1] === this.categorySelected) {
        this.subCategoryList = [];
        for (let n = 0; n < category[2].length; n++) {
          this.subCategoryList[n] = category[2][n];
        }
      };
    })
  }

  loadProducts() {

    this.rawList = this.productService.getProductListWithFilter('product/' + this.categorySelected + '/' + this.subCategorySelected, this.maxPrice, this.minPrice)
    this.rawList.valueChanges().subscribe(val => {
      this.productList = val;
    })

  }

}
