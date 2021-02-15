import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { MatSelectModule } from '@angular/material/select';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { ProductListItemComponent } from './components/admin/product-list-item/product-list-item.component';
import { MatTableModule } from '@angular/material/table';
import { EditProductComponent } from './components/admin/edit-product/edit-product.component';
import { CartCenterComponent } from './components/content/cart-center/cart-center.component';
import { AccountComponent } from './components/login/account/account.component';
import { UpdateDataComponent } from './components/login/update-data/update-data.component';
import { PurchaseHistoryComponent } from './components/login/purchase-history/purchase-history.component';
import { DialogContentComponent } from './components/login/purchase-history/purchase-history.component';
import { FinalizePaymentComponent } from './components/content/finalize-payment/finalize-payment.component';
import { PaymentCompleteComponent } from './components/content/payment-complete/payment-complete.component';
import { PurchasesListComponent } from './components/admin/purchases-list/purchases-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BeforeShipmentComponent } from './components/admin/before-shipment/before-shipment.component';
import { AfterShipmentComponent } from './components/admin/after-shipment/after-shipment.component';
import { DuringPackingComponent } from './components/admin/during-packing/during-packing.component';
import { ManageShipmentComponent } from './components/admin/manage-shipment/manage-shipment.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    //admin
    AddProductComponent,
    ProductListComponent,
    ProductListItemComponent,
    EditProductComponent,
    BeforeShipmentComponent,
    AfterShipmentComponent,
    DuringPackingComponent,
    ManageShipmentComponent,
    //all

    //user
    CartCenterComponent,
    AccountComponent,
    UpdateDataComponent,
    PurchaseHistoryComponent,
    FinalizePaymentComponent,
    PaymentCompleteComponent,
    PurchasesListComponent,
    DialogContentComponent,

    AppComponent,

  ],
  imports: [
    //admin
    MatSelectModule,
    MatTableModule,
    //all


    //user
    MatSelectModule,
    MatTableModule,
    MatDialogModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    SharedModule

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
