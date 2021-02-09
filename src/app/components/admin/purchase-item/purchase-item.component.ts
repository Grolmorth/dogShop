import { Product } from './../../../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.scss']
})
export class PurchaseItemComponent implements OnInit {
  @Input() item: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
