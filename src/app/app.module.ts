import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { AccountComponent } from './components/login/account/account.component';
import { UpdateDataComponent } from './components/login/update-data/update-data.component';
import { PurchaseHistoryComponent } from './components/login/purchase-history/purchase-history.component';
import { DialogContentComponent } from './components/login/purchase-history/purchase-history.component';
import { FinalizePaymentComponent } from './components/content/finalize-payment/finalize-payment.component';
import { PaymentCompleteComponent } from './components/content/payment-complete/payment-complete.component';
import { PurchasesListComponent } from './components/admin/purchases-list/purchases-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    // user
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
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // user
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
