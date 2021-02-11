import { Router } from '@angular/router';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent {
  @Input() purchaseList: Purchase[];
  constructor(private router: Router) { }
  pushPurchaseToStorage(purchase: Purchase) {
    localStorage.setItem('purchase', JSON.stringify(purchase));
    this.router.navigateByUrl('a/packing');
  }

}
