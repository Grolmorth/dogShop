import { PurchaseService } from './../../../services/purchase.service';
import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';

@Component({
  selector: 'app-after-shipment',
  templateUrl: './after-shipment.component.html',
  styleUrls: ['./after-shipment.component.scss']
})
export class AfterShipmentComponent implements OnInit {

  list: Purchase[];
  constructor(private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.purchaseService.getOrder('after-shipment').valueChanges().subscribe(val => {
      this.list = val;
    });
  }
}
