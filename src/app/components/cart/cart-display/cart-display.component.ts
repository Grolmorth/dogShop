import { Product } from 'src/app/models/product';
import { MessengerService } from './../../../services/messenger.service';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.scss']
})
export class CartDisplayComponent implements OnInit {

  // close cart
  @Output() closeCartEvent = new EventEmitter<boolean>();
  showButton = true;
  cartItems: Product[] = [];
  cartTotal = 0;
  constructor(private msg: MessengerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot['_routerState'].url === "/cart") {
      this.showButton = false;
    }
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
  closeCart(value: boolean = true) {
    this.closeCartEvent.emit(value);
  }



}
