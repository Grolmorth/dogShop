import { ProductService } from './../../../services/product.service';
import { NavServiceService } from 'src/app/services/nav-service.service';
import { AngularFireList } from '@angular/fire/database';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Input() category: { name: string, link: string }
  constructor(private navService: NavServiceService, private productService: ProductService) { }
  categoryList: [{ name: string, link: string, index: number }] = [{ name: '', link: '', index: 0 }];
  listRaw: AngularFireList<any>;

  ngOnInit(): void {
    this.getCategoryList()
  }
  getCategoryList(): void {

  }
}
