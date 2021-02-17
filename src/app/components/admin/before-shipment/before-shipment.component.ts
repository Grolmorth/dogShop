import { PurchaseService } from './../../../services/purchase.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-before-shipment',
  templateUrl: './before-shipment.component.html',
  styleUrls: ['./before-shipment.component.scss']
})
export class BeforeShipmentComponent implements OnInit, OnDestroy {

  ordersList: Purchase[] = [];
  constructor(private purchaseService: PurchaseService) { }
  sub: Subscription;

  ngOnInit(): void {
    this.sub = this.purchaseService.getOrder('before-shipment').valueChanges().subscribe(val => {
      this.ordersList = val;

    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
