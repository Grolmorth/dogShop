import { ProductService } from './../../../services/product.service';
import { Router } from '@angular/router';
import { AfterContentChecked, AfterContentInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from 'src/app/services/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements AfterContentInit, OnChanges {
  @Input() productList: Product[] = [];

  displayedColumns: string[] = ['id', 'name', 'company', 'price', 'action'];
  dataSource = new MatTableDataSource(this.productList);
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private productService: ProductService) { }
  sortData(): void {
    this.dataSource.sort = this.sort;

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.productList);
  }
  ngAfterContentInit(): void {
    this.dataSource = new MatTableDataSource(this.productList);
  }
  editProduct(product: Product) {
    localStorage.setItem('editProduct', JSON.stringify(product))
    this.router.navigateByUrl('a/edit');
  }
  deleteProduct(product: Product) {
    this.productService.removeProduct(product.categoryLink, product.subCategoryLink, product.id);
    this.productService.removeImage(product.imgRef);
  }

}
