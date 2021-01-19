import { Component, OnInit } from '@angular/core';

import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/services/product';

@Component({
  selector: 'app-cart-center',
  templateUrl: './cart-center.component.html',
  styleUrls: ['./cart-center.component.scss']
})
export class CartCenterComponent implements OnInit {



  cartItems: Product[] = [];
  cartTotal = 0;
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.getCartFromStorage()
    this.msg.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
    this.getTotalCost()
  }
  addProductToCart(product: Product) {

    let productExist = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        if (!product.quantity) {
          this.cartItems[i].quantity++;
        } else {
          this.cartItems[i].quantity += product.quantity;
        }

        productExist = true;
        localStorage.setItem('cart', JSON.stringify(this.cartItems))
        break;
      }
    }
    if (!productExist) {
      if (!product.quantity) { product.quantity = 1; }
      this.cartItems.push(product);
      this.pushCartToStorage()
    }
    this.getTotalCost()
  }
  getTotalCost() {
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
  pushCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems))
  }
  removeItem(item) {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === item.id) {
        this.cartItems.splice(Number(i), 1);
        this.pushCartToStorage();
        break;
      }
    }
    this.getTotalCost();
  }
  quantityMinus(item) {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === item.id) {
        this.cartItems[i].quantity--;
        if (this.cartItems[i].quantity === 0) {
          this.removeItem(item)
        }
        this.pushCartToStorage();
        break;
      }
    }
    this.getTotalCost()

  }
  quantityPlus(item) {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === item.id) {
        this.cartItems[i].quantity++
        this.pushCartToStorage();
        break;
      }
    }
    this.getTotalCost()
  }
}
