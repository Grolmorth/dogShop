import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { FinalizePaymentComponent } from 'src/app/components/content/finalize-payment/finalize-payment.component';
import { PaymentCompleteComponent } from 'src/app/components/content/payment-complete/payment-complete.component';
import { AccountComponent } from 'src/app/components/login/account/account.component';
import { PurchaseHistoryComponent } from 'src/app/components/login/purchase-history/purchase-history.component';
import { UpdateDataComponent } from 'src/app/components/login/update-data/update-data.component';
import { UserGuard } from 'src/app/services/user.guard';

const userRoutes: Routes = [
  {
    path: 'account',
    component: AccountComponent, canActivate: [UserGuard]
  },
  {
    path: 'finalize-payment',
    component: FinalizePaymentComponent, canActivate: [UserGuard]
  },
  {
    path: 'payment-complete',
    component: PaymentCompleteComponent, canActivate: [UserGuard]
  },
  {
    path: 'update-data',
    component: UpdateDataComponent, canActivate: [UserGuard]
  },
  {
    path: 'purchase-history',
    component: PurchaseHistoryComponent, canActivate: [UserGuard]
  },
]

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
