import { Product } from 'src/app/services/product';
import { Component, Input, OnInit, ViewChild, OnDestroy, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-all-products-display',
  templateUrl: './all-products-display.component.html',
  styleUrls: ['./all-products-display.component.scss']
})
export class AllProductsDisplayComponent implements OnDestroy, OnChanges, OnInit {
  @Input() productListAll: Product[];
  constructor() { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  maxPrice: number = null;
  minPrice: number = null;
  priceChecked = false;
  productList: Product[] = [];
  dataSource: MatTableDataSource<Product>;
  sortByPrice = true;
  obs: Observable<any>;
  filters: boolean = false;
  sorts: boolean = false;

  // brand checkbox
  brandControl = new FormControl();
  brands: string[] = ['SELECT GOLD', 'PREMIERE', 'MultiFit', 'REAL NATURE', 'Hunter', 'Canina', '	Happy Dog', 'Trixie', 'AniOne', 'CooCoo Design', 'FIT+FUN', 'MORE FOR', 'Earth Rated', 'Europet Bernina', 'Moser', 'Quiko', 'TAKE CARE', 'Dogs Creek', 'Kong'];
  filteredOptions: Observable<string[]>;
  sortByBrand = true;
  brandChecked = false;
  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Product>(this.productListAll);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
    this.filterReset();

  }
  ngOnInit() {
    this.filteredOptions = this.brandControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    //listen to changes in brand input, every change trigger event
    this.brandControl.valueChanges.subscribe(val => {
      if (val) {
        this.applyFilters();
      }
    })
  }
  sortData(order: string): void {
    if (order === 'price' && !this.sortByPrice) {
      this.sortByPrice = !this.sortByPrice;
      this.dataSource.data.sort(function (a, b) {
        return a.price - b.price;
      });
    }
    else if (order === 'price' && this.sortByPrice) {
      this.sortByPrice = !this.sortByPrice;
      this.dataSource.data.sort(function (a, b) {
        return b.price - a.price;
      });
    }
    if (order === 'brand' && this.sortByBrand) {
      this.sortByBrand = !this.sortByBrand;
      this.dataSource.data.sort(function (a, b) {
        return a.company.localeCompare(b.company);
      });
    } else if (order === 'brand' && !this.sortByBrand) {
      this.sortByBrand = !this.sortByBrand;
      this.dataSource.data.sort(function (a, b) {
        return b.company.localeCompare(a.company);
      });
    }
    this.dataSource = new MatTableDataSource<Product>(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }
  applyFilters(): void {

    let max: number;
    let min: number;
    let brandName: string;
    const filtredList: Array<Product> = [];
    this.productList = this.productListAll;

    if (this.maxPrice === null) {
      max = 1000000;
    } else { max = this.maxPrice; }
    if (this.minPrice === null) {
      min = 0;
    } else { min = this.minPrice; }
    if (this.brandControl.value) {
      brandName = this.brandControl.value;
    } else { brandName = null; }
    if (!this.brandChecked) {
      brandName = null;
    }
    if (!this.priceChecked) {
      max = 1000000;
      min = 0;
    }
    this.productList.map(val => {
      if (val.price > min && val.price < max) {
        if (brandName) {
          if (val.company === brandName) {
            filtredList.push(val);
          }
        } else { filtredList.push(val); }

      }
    });
    this.dataSource = new MatTableDataSource<Product>(filtredList);
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

  }

  ngOnDestroy(): void {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
  filterReset(): void {
    this.maxPrice = this.minPrice = null;
    this.priceChecked = false;
    this.brandChecked = false;
    this.brandControl.setValue(null);
  }
  // brand input
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.brands.filter(brands => brands.toLowerCase().includes(filterValue));
  }
  toggleFilters() {
    this.filters = !this.filters;
  }
  toggleSorts() {
    this.sorts = !this.sorts;
  }
}
