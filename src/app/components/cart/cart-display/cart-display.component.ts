import { Product } from 'src/app/services/product';
import { MessengerService } from './../../../services/messenger.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.scss']
})
export class CartDisplayComponent implements OnInit {

  cartItems: Product[] = [];
  cartTotal = 0;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.getCartFromStorage()
    this.msg.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product);

    });
  }
  addProductToCart(product: Product) {

    let productExist = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].quantity++;
        productExist = true;
        localStorage.setItem('cart', JSON.stringify(this.cartItems))
        break;
      }
    }

    if (!productExist) {
      product.quantity = 1;
      this.cartItems.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cartItems))
    }

    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.price * item.quantity);
    });


  }

  getCartFromStorage() {
    if (localStorage.getItem('cart')) {
      this.cartItems = JSON.parse(localStorage.getItem('cart'))
    }
  }
}
