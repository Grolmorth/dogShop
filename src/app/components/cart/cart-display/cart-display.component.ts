import { Product } from 'src/app/models/product';
import { MessengerService } from './../../../services/messenger.service';

import { Component, EventEmitter, OnInit, Output, OnDestroy, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.scss']
})
export class CartDisplayComponent implements OnInit, OnDestroy, DoCheck {

  // close cart
  @Output() closeCartEvent = new EventEmitter<boolean>();
  showButton = true;
  cartItems: Product[] = [];
  cartTotal = 0;
  messageSub: Subscription;
  constructor(private msg: MessengerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot['_routerState'].url === "/cart") {
      this.showButton = false;
    }
    this.getCartFromStorage()
    this.messageSub = this.msg.getMessage().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
    this.getTotalCost()
  }
  ngDoCheck(): void {
    // reset cartItems if there are no items in localStorage cart
    if (!localStorage.getItem('cart')) {
      this.cartItems.length = 0;
    }
  }
  addProductToCart(product: Product) {

    let productExist = false;
    for (const i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {

        this.cartItems[i].quantity += product.quantity;

        productExist = true;
        break;
      }
    }
    if (!productExist) {
      this.cartItems.push(product);
    }
    this.pushCartToStorage();
    this.getTotalCost();
    // cant work around this :( vv
    this.ngOnDestroy();
    this.ngOnInit();
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

  ngOnDestroy() {
    this.messageSub.unsubscribe();
  }

}
