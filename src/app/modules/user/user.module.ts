import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PurchasesListComponent } from 'src/app/components/admin/purchases-list/purchases-list.component';
import { FinalizePaymentComponent } from 'src/app/components/content/finalize-payment/finalize-payment.component';
import { PaymentCompleteComponent } from 'src/app/components/content/payment-complete/payment-complete.component';
import { AccountComponent } from 'src/app/components/login/account/account.component';
import { PurchaseHistoryComponent, DialogContentComponent } from 'src/app/components/login/purchase-history/purchase-history.component';
import { UpdateDataComponent } from 'src/app/components/login/update-data/update-data.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AccountComponent,
    UpdateDataComponent,
    PurchaseHistoryComponent,
    FinalizePaymentComponent,
    PaymentCompleteComponent,
    DialogContentComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
  ]
})
export class UserModule { }
