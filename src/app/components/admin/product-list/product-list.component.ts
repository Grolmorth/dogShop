import { NavServiceService } from './../../../services/nav-service.service';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Product } from 'src/app/services/product';
import { AngularFireList } from '@angular/fire/database';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit, DoCheck {


  productList: Product[] = [];
  productListAll: Product[] = [];
  categoryList: any;
  categorySelected: string = '';
  subCategoryList: any;
  subCategorySelected: string = '';
  rawList: AngularFireList<any>;
  maxPrice: number = null;
  minPrice: number = null;
  priceChecked = false;
  brandChecked = false;
  // brand checkbox
  brandControl = new FormControl();
  brands: string[] = ['SELECT GOLD', 'PREMIERE', 'MultiFit', 'REAL NATURE', 'Hunter'];
  filteredOptions: Observable<string[]>;

  constructor(private productService: ProductService, private navService: NavServiceService) { }

  ngOnInit(): void {
    this.getCategoryList();
    this.filteredOptions = this.brandControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
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
        this.subCategoryList = [''];
        for (let n = 0; n < category[2].length; n++) {
          this.subCategoryList[n] = category[2][n];
        }
      };
    })
  }

  //get all products from category -- no subcategory needed =>
  //get all products from all subcategory =>
  //get products from subcategory, add to rest, and so on

  loadAllFromCategory() {
    this.clearProductList();
    for (const category of this.subCategoryList) {
      this.loadProducts(category[1])
    }
  }
  loadFromOneCategory() {
    this.clearProductList();
    this.loadProducts(this.subCategorySelected);
  }

  loadProducts(subCategory: string) {

    // always add price filter
    let maxPrice: number = this.maxPrice;
    let minPrice: number = this.minPrice;
    if (maxPrice === null || !this.priceChecked) {
      maxPrice = 1000000;
    }
    if (minPrice === null || !this.priceChecked) {
      minPrice = 0;
    }
    // add brand filter if checked
    if (this.brandChecked) {
      this.rawList = this.productService.getProductListWithFilter('product/' + this.categorySelected + '/' + subCategory, maxPrice, minPrice, this.brandControl.value)
      this.fillProductList();
    }
    else if (!this.brandChecked) {
      this.rawList = this.productService.getProductListWithFilter('product/' + this.categorySelected + '/' + subCategory, maxPrice, minPrice)
      this.fillProductList();
    }
  }
  clearProductList() {
    this.productList = [];
    this.productListAll = [];
  }
  fillProductList() {
    this.rawList.valueChanges().subscribe(val => {
      this.productList = val;
      this.productListAll = this.productListAll.concat(this.productList);
    })

  }
  // filter for brands
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.brands.filter(brands => brands.toLowerCase().includes(filterValue));
  }

}
