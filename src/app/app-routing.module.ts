import { DuringPackingComponent } from './components/admin/during-packing/during-packing.component';
import { BeforeShipmentComponent } from './components/admin/before-shipment/before-shipment.component';
import { PurchasesListComponent } from './components/admin/purchases-list/purchases-list.component';
import { FinalizePaymentComponent } from './components/content/finalize-payment/finalize-payment.component';
import { UpdateDataComponent } from './components/login/update-data/update-data.component';
import { AccountComponent } from './components/login/account/account.component';
import { CreateAccountComponent } from './components/login/create-account/create-account.component';
import { CartCenterComponent } from './components/content/cart-center/cart-center.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';

import { CartDisplayComponent } from './components/cart/cart-display/cart-display.component';
import { DisplayDetailItemComponent } from './components/content/display-detail-item/display-detail-item.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { SubCategoryDisplayComponent } from './components/content/sub-category-display/sub-category-display.component';
import { CategoryDisplayComponent } from './components/content/category-display/category-display.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { PurchaseHistoryComponent } from './components/login/purchase-history/purchase-history.component';
import { PaymentCompleteComponent } from './components/content/payment-complete/payment-complete.component';




const routes: Routes = [
  {
    path: '',
    component: CategoryDisplayComponent,
    pathMatch: 'full',
  },
  {
    path: 'c/:categoryName',
    component: CategoryDisplayComponent,
  },
  {
    path: 'c/:categoryName/:subCategoryName',
    component: SubCategoryDisplayComponent,
  },
  {
    path: 'p/:categoryLink/:subCategoryLink/:nameLink/:id',
    component: DisplayDetailItemComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'finalize-payment',
    component: FinalizePaymentComponent,
  },
  {
    path: 'payment-complete',
    component: PaymentCompleteComponent,
  },
  {
    path: 'create-user',
    component: CreateAccountComponent,
  },
  {
    path: 'update-data',
    component: UpdateDataComponent,
  },
  {
    path: 'purchase-history',
    component: PurchaseHistoryComponent,
  },
  {
    path: 'a/add',
    component: AddProductComponent,
  },
  {
    path: 'a/edit',
    component: EditProductComponent,
  },
  {
    path: 'a/menagment',
    component: ProductListComponent,
  },
  {
    path: 'a/packing',
    component: DuringPackingComponent,
  },
  {
    path: 'a/purchases',
    component: BeforeShipmentComponent,
  },
  {
    path: 'cart',
    component: CartCenterComponent,
  },

  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
