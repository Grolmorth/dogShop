import { PurchaseService } from './../../../services/purchase.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-after-shipment',
  templateUrl: './after-shipment.component.html',
  styleUrls: ['./after-shipment.component.scss']
})
export class AfterShipmentComponent implements OnInit, OnDestroy {

  list: Purchase[];
  constructor(private purchaseService: PurchaseService) { }
  sub: Subscription;
  ngOnInit(): void {
    this.sub = this.purchaseService.getOrder('after-shipment').valueChanges().subscribe(val => {
      this.list = val;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
