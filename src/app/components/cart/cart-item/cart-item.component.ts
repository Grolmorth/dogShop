import { Product } from './../../../models/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: Product;
  @Output() closeCartEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  closeCart(value: boolean = true) {
    this.closeCartEvent.emit(value);
  }

}
