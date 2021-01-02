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
        this.subCategoryList = [];
        for (let n = 0; n < category[2].length; n++) {
          this.subCategoryList[n] = category[2][n];
        }
      };
    })
  }

  loadProducts() {
    this.productList = [];
    let maxPrice: number;
    let minPrice: number;
    // fill price if empty
    if (this.priceChecked) {
      maxPrice = this.maxPrice;
      minPrice = this.minPrice;
    }
    if (maxPrice === null) {
      maxPrice = 1000000;
    }
    if (minPrice === null) {
      minPrice = 0;
    }
    if (this.brandChecked) {
      this.rawList = this.productService.getProductListWithFilter('product/' + this.categorySelected + '/' + this.subCategorySelected, maxPrice, minPrice, this.brandControl.value)
      this.fillProductList();
    }
    else if (!this.brandChecked) {
      this.rawList = this.productService.getProductListWithFilter('product/' + this.categorySelected + '/' + this.subCategorySelected, maxPrice, minPrice)
      this.fillProductList();
    }
  }

  fillProductList() {
    this.rawList.valueChanges().subscribe(val => {
      this.productList = val;
    })


  }
  // filter for brands
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.brands.filter(brands => brands.toLowerCase().includes(filterValue));
  }

}
