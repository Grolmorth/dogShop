import { Router } from '@angular/router';
import { PurchaseService } from './../../../services/purchase.service';
import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';

@Component({
  selector: 'app-during-packing',
  templateUrl: './during-packing.component.html',
  styleUrls: ['./during-packing.component.scss']
})
export class DuringPackingComponent implements OnInit {

  allComplate: boolean = false;
  checkList: boolean[] = [];
  constructor(private purchaseService: PurchaseService, private router: Router) { }

  purchase: Purchase;
  ngOnInit(): void {
    // get item from storage
    this.purchase = JSON.parse(localStorage.getItem('purchase'));
    // create array for checkboxes, fill it with falses
    for (let i = 0; i < this.purchase.purchaseList.length; i++) {
      this.checkList[i] = false;
    }

  }
  // with every check/unceck change true/false
  checkElement(el) {
    this.checkList[el] = !this.checkList[el];
    this.updateAllComplete();
  }
  // if every item is checked allComplete= true
  updateAllComplete() {
    this.allComplate = this.checkList.every(v => v === true);
  }
  orderComplete(purchase: Purchase) {
    this.purchaseService.orderComplete(purchase);
    localStorage.removeItem('purchase');
    this.router.navigateByUrl('a/purchases');
  }
}
