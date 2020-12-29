import { Router } from '@angular/router';
import { AfterContentChecked, AfterContentInit, Component, Input, ViewChild } from '@angular/core';
import { Product } from 'src/app/services/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements AfterContentInit {
  @Input() productList: Product[] = [];

  displayedColumns: string[] = ['id', 'name', 'company', 'price', 'action'];
  dataSource = new MatTableDataSource(this.productList);
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router) { }
  sortData(): void {
    this.dataSource.sort = this.sort;

  }
  ngAfterContentInit(): void {
    this.dataSource = new MatTableDataSource(this.productList);
  }
  editProduct(product: Product) {
    localStorage.setItem('editProduct', JSON.stringify(product))
    this.router.navigateByUrl('a/edit');
  }
}
