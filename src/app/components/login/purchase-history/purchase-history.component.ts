import { Purchase } from './../../../models/purchase';
import { UserDataService } from './../../../services/user-data.service';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class PurchaseHistoryComponent implements OnInit, OnDestroy {

  shoppingHistory: Purchase[] = [];
  displayedColumns: string[] = ['date', 'purchaseList', 'totalValue', 'paid', 'sent'];
  sub: Subscription;
  constructor(private userData: UserDataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.sub = this.userData.getPurchaseHistory().valueChanges().subscribe(val => {
      this.shoppingHistory = val;
    });
  }
  openDialog(element) {
    this.dialog.open(DialogContentComponent, {
      data: {
        date: element.date,
        paid: element.paid,
        sent: element.sent,
        totalValue: element.totalValue,
        userEmail: element.userEmail,
        userUid: element.userUid,
        userAddress: element.userAddress,
        purchaseList: element.purchaseList

      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}


@Component({
  selector: 'dialog-content',
  templateUrl: 'dialog-content.component.html',
  styleUrls: ['./purchase-history.component.scss']
})
export class DialogContentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Purchase) { }
}
