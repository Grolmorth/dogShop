import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';

@Component({
  selector: 'app-purchases-list',
  templateUrl: './purchases-list.component.html',
  styleUrls: ['./purchases-list.component.scss']
})
export class PurchasesListComponent implements OnChanges {
  @Input() purchaseList: Purchase[];
  constructor() { }

  ngOnChanges(): void {
    console.log(this.purchaseList);
  }

}
