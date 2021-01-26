
import { ActivatedRoute } from '@angular/router';
import { Component, DoCheck, OnInit } from '@angular/core';
import { User } from 'src/app/services/user';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements DoCheck, OnInit {

  shopItems = 0;
  cartVisible = false;
  showContent = true;
  user: User;


  constructor(private route: ActivatedRoute) { }

   ngOnInit(): void {
    if (localStorage.getItem('user')) {

    }

  }


  ngDoCheck(): void {
    if (this.route.snapshot['_routerState'].url === "/cart") {
      this.showContent = false;
      this.cartVisible = false;
    }
    else {
      this.showContent = true;
    }
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
