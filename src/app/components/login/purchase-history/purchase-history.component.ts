
import { Purchase } from './../../../models/purchase';
import { UserDataService } from './../../../services/user-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit {

  shoppingHistory: Purchase[] = [];
  displayedColumns: string[] = ['date', 'purchaseList', 'totalValue', 'paid', 'sent'];
  constructor(private userData: UserDataService) { }

  ngOnInit(): void {
    this.userData.getPurchaseHistory().valueChanges().subscribe(val => {
      this.shoppingHistory = val;
    });
  }

  passData(element) {
    console.log(element)
  }
}

