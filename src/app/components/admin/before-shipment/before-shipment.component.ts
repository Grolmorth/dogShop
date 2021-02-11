import { PurchaseService } from './../../../services/purchase.service';
import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';

@Component({
  selector: 'app-before-shipment',
  templateUrl: './before-shipment.component.html',
  styleUrls: ['./before-shipment.component.scss']
})
export class BeforeShipmentComponent implements OnInit {

  ordersList: Purchase[] = [];
  constructor(private purchaseService: PurchaseService) { }


  ngOnInit(): void {
    this.purchaseService.getOrder('before-shipment').valueChanges().subscribe(val => {
      this.ordersList = val;
    });
  }


}
