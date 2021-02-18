import { PurchasesListComponent } from './../../components/admin/purchases-list/purchases-list.component';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from 'src/app/components/admin/add-product/add-product.component';
import { AfterShipmentComponent } from 'src/app/components/admin/after-shipment/after-shipment.component';
import { BeforeShipmentComponent } from 'src/app/components/admin/before-shipment/before-shipment.component';
import { DuringPackingComponent } from 'src/app/components/admin/during-packing/during-packing.component';
import { EditProductComponent } from 'src/app/components/admin/edit-product/edit-product.component';
import { ManageShipmentComponent } from 'src/app/components/admin/manage-shipment/manage-shipment.component';
import { ProductListItemComponent } from 'src/app/components/admin/product-list-item/product-list-item.component';
import { ProductListComponent } from 'src/app/components/admin/product-list/product-list.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddProductComponent,
    ProductListComponent,
    ProductListItemComponent,
    EditProductComponent,
    BeforeShipmentComponent,
    AfterShipmentComponent,
    DuringPackingComponent,
    ManageShipmentComponent,
    PurchasesListComponent
  ],
  imports: [
    AdminRoutingModule,
    MatSelectModule,
    MatTableModule,
    SharedModule
  ]

})
export class AdminModule { }
