import { Product } from 'src/app/services/product';
import { Component, Input, OnInit, ViewChild, OnDestroy, SimpleChanges, OnChanges, AfterContentInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-all-products-display',
  templateUrl: './all-products-display.component.html',
  styleUrls: ['./all-products-display.component.scss']
})
export class AllProductsDisplayComponent implements OnDestroy, OnChanges {
  @Input() productListAll: Product[];
  constructor() { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  maxPrice: number = null;
  minPrice: number = null;
  priceChecked = false;
  productList: Product[] = [];

  dataSource: MatTableDataSource<Product>;
  sortByBrand: boolean = true;
  sortByPrice: boolean = true;

  obs: Observable<any>;

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Product>(this.productListAll);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
    this.filterReset();
  }

  sortData(order: string): void {
    if (order === 'price' && !this.sortByPrice) {
      this.sortByPrice = !this.sortByPrice;
      this.dataSource.data.sort(function (a, b) {
        return a.price - b.price
      })
    }
    else if (order === 'price' && this.sortByPrice) {
      this.sortByPrice = !this.sortByPrice;
      this.dataSource.data.sort(function (a, b) {
        return b.price - a.price
      })
    }
    if (order === 'brand' && this.sortByBrand) {
      this.sortByBrand = !this.sortByBrand;
      this.dataSource.data.sort(function (a, b) {
        return a.company.localeCompare(b.company);
      })
    } else if (order === 'brand' && !this.sortByBrand) {
      this.sortByBrand = !this.sortByBrand;
      this.dataSource.data.sort(function (a, b) {
        return b.company.localeCompare(a.company);
      })
    }
    this.dataSource = new MatTableDataSource<Product>(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }
  applyFilters(): void {
    if (this.priceChecked) {
      let max: number;
      let min: number;
      let filtredList: Array<Product> = [];
      this.productList = this.productListAll;

      if (this.maxPrice === null) {
        max = 1000000
      } else { max = this.maxPrice }
      if (this.minPrice === null) {
        min = 0
      } else { min = this.minPrice }

      this.productList.map(val => {
        if (val.price > min && val.price < max) {
          filtredList.push(val);
        }
      })
      this.dataSource = new MatTableDataSource<Product>(filtredList);
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    } else if (!this.priceChecked) {
      this.dataSource = new MatTableDataSource<Product>(this.productListAll);
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    }


  }
  ngOnDestroy(): void {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
  filterReset(): void {
    this.maxPrice = this.minPrice = null;
    this.priceChecked = false;
  }
}
