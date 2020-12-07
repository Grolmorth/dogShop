import { Product } from './../../../services/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.scss']
})
export class DisplayItemComponent implements OnInit {

  constructor() { }
  @Input() product: Product;
  category: string;
  subCategory: string;
  name: string;
  id:number;
  ngOnInit(): void {
    this.category = this.product.categoryLink;
    this.subCategory = this.product.subCategoryDisplay;
    this.name = this.product.nameLink;
    this.id = this.product.id;
  }

}
