import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss']
})
export class MenuPanelComponent implements DoCheck {

  shopItems = 0;

  constructor() { }

  ngDoCheck(): void {
    if (localStorage.getItem('cart')) {
      this.shopItems = JSON.parse(localStorage.getItem('cart')).length;
    }
  }

}
