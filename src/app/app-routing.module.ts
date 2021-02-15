import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { ManageShipmentComponent } from './components/admin/manage-shipment/manage-shipment.component';
import { AfterShipmentComponent } from './components/admin/after-shipment/after-shipment.component';
import { DuringPackingComponent } from './components/admin/during-packing/during-packing.component';
import { BeforeShipmentComponent } from './components/admin/before-shipment/before-shipment.component';
import { FinalizePaymentComponent } from './components/content/finalize-payment/finalize-payment.component';
import { UpdateDataComponent } from './components/login/update-data/update-data.component';
import { AccountComponent } from './components/login/account/account.component';
import { CreateAccountComponent } from './components/login/create-account/create-account.component';
import { CartCenterComponent } from './components/content/cart-center/cart-center.component';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
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
    path: 'create-user',
    component: CreateAccountComponent,
  },
  {
    path: 'update-data',
    component: UpdateDataComponent, canActivate: [UserGuard]
  },
  {
    path: 'purchase-history',
    component: PurchaseHistoryComponent, canActivate: [UserGuard]
  },
  {
    path: 'a/add-product',
    component: AddProductComponent, canActivate: [AdminGuard]
  },
  {
    path: 'a/manage-product',
    component: ProductListComponent, canActivate: [AdminGuard]
  },
  {
    path: 'a/edit',
    component: EditProductComponent, canActivate: [AdminGuard]
  },
  {
    path: 'a/after-shipment',
    component: AfterShipmentComponent, canActivate: [AdminGuard]
  },
  {
    path: 'a/manage-shipment',
    component: ManageShipmentComponent, canActivate: [AdminGuard]
  },
  {
    path: 'a/before-shipment',
    component: BeforeShipmentComponent, canActivate: [AdminGuard]
  },
  {
    path: 'a/packing',
    component: DuringPackingComponent, canActivate: [AdminGuard]
  },
  {
    path: 'cart',
    component: CartCenterComponent,
  },
  { path: 'shared', loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule) },

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
