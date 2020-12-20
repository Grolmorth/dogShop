import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements DoCheck {

  shopItems = 0;
  cartVisible = false;


  constructor() { }

  ngDoCheck(): void {
    if (localStorage.getItem('cart')) {
      this.shopItems = JSON.parse(localStorage.getItem('cart')).length;
    }
    if (this.shopItems === 0 && this.cartVisible === true) {
      setTimeout(() => {
        this.cartVisible = false;

      }, 1000
      );
    }
  }
  toggleCart() {
    this.cartVisible = !this.cartVisible;
  }

}
