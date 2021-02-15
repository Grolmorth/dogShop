import { ProductListItemComponent } from './../product-list-item/product-list-item.component';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from '../add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ProductListComponent } from '../product-list/product-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { AfterShipmentComponent } from '../after-shipment/after-shipment.component';
import { BeforeShipmentComponent } from '../before-shipment/before-shipment.component';
import { DuringPackingComponent } from '../during-packing/during-packing.component';
import { ManageShipmentComponent } from '../manage-shipment/manage-shipment.component';
import { CustomPaginator } from 'src/app/services/customPaginatorConfiguration';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CurrencyPlnPipe } from 'src/app/pipes/currency-pln.pipe';





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
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatAutocompleteModule,

  ],
  providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginator() }]

})
export class AdminModule { }
