import { ProductService } from './../../../services/product.service';
import { NavServiceService } from './../../../services/nav-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/services/product';
import { AngularFireList } from '@angular/fire/database';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.scss']
})
export class CategoryDisplayComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  maxPrice: number = null;
  minPrice: number = null;
  priceChecked = false;
  rawList: AngularFireList<any>;
  productList: Product[] = [];
  productListAll: Product[] = [];
  dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>(this.productListAll);
  categoryLink: string;
  categoryName: any;
  sortByBrand: boolean = true;
  sortByPrice: boolean = true;
  sub: any;
  obs: Observable<any>;
  constructor(private navServ: NavServiceService, private route: ActivatedRoute, private productService: ProductService, private router: Router) { }
  navigation: any;
  ngOnInit(): void {

    //subscribe route params
    this.sub = this.route.params.subscribe(params => {
      this.categoryLink = params.categoryName;
      this.navServ.navlink.map(v => {
        // change content if params are changed
        if (v[1] === this.categoryLink) {
          this.categoryName = v[0];
          this.navigation = v[2];
          this.loadAllFromCategory();
        }
      });

    }), (err) => console.error(err);
    if (this.categoryName === undefined) {
      this.router.navigateByUrl('page-not-found');
    }

  }

  loadProducts(subCategory: string) {
    this.rawList = this.productService.getProductListWithFilter('product/' + this.categoryLink + '/' + subCategory, 100000, 0)
    this.fillProductList();
  }
  fillProductList(): void {
    this.rawList.valueChanges().subscribe(val => {
      this.productList = val;
      this.productListAll = this.productListAll.concat(this.productList);
      this.dataSource = new MatTableDataSource<Product>(this.productListAll);
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    })

  }
  loadAllFromCategory(): void {
    this.clearProductList();
    for (const category of this.navigation) {
      this.loadProducts(category[1])
    }
  }
  clearProductList(): void {
    this.productList = [];
    this.productListAll = [];
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
  sortData(order: string): void {
    if (order === 'price' && !this.sortByPrice) {
      this.sortByPrice = !this.sortByPrice;
      this.productListAll.sort(function (a, b) {
        return a.price - b.price
      })
    }
    else if (order === 'price' && this.sortByPrice) {
      this.sortByPrice = !this.sortByPrice;
      this.productListAll.sort(function (a, b) {
        return b.price - a.price
      })
    }
    if (order === 'brand' && this.sortByBrand) {
      this.sortByBrand = !this.sortByBrand;
      this.productListAll.sort(function (a, b) {
        return a.company.localeCompare(b.company);
      })
    } else if (order === 'brand' && !this.sortByBrand) {
      this.sortByBrand = !this.sortByBrand;
      this.productListAll.sort(function (a, b) {
        return b.company.localeCompare(a.company);
      })
    }
    this.dataSource = new MatTableDataSource<Product>(this.productListAll);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }
  applyFilters(): void {
    console.log(this.productListAll);

    console.log(this.obs)

  }
}
