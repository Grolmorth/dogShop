import { AfterContentChecked, Component, Input,  ViewChild } from '@angular/core';
import { Product } from 'src/app/services/product';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements  AfterContentChecked {
  @Input() productList: Product[] = [];

  displayedColumns: string[] = ['id', 'name', 'company', 'price'];
  dataSource = new MatTableDataSource(this.productList);
  @ViewChild(MatSort) sort: MatSort;

  sortData(): void {
    this.dataSource.sort = this.sort;
  }
  ngAfterContentChecked(): void {
    this.dataSource = new MatTableDataSource(this.productList);
  }

}
