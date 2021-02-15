import { AddProductComponent } from './../add-product/add-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from 'src/app/services/admin.guard';
import { ProductListComponent } from '../product-list/product-list.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { AfterShipmentComponent } from '../after-shipment/after-shipment.component';
import { BeforeShipmentComponent } from '../before-shipment/before-shipment.component';
import { DuringPackingComponent } from '../during-packing/during-packing.component';
import { ManageShipmentComponent } from '../manage-shipment/manage-shipment.component';

const routes: Routes = [
  {
    path: 'add-product',
    component: AddProductComponent, canActivate: [AdminGuard]
  },
  {
    path: 'manage-product',
    component: ProductListComponent, canActivate: [AdminGuard]
  },
  {
    path: 'edit',
    component: EditProductComponent, canActivate: [AdminGuard]
  },
  {
    path: 'after-shipment',
    component: AfterShipmentComponent, canActivate: [AdminGuard]
  },
  {
    path: 'manage-shipment',
    component: ManageShipmentComponent, canActivate: [AdminGuard]
  },
  {
    path: 'before-shipment',
    component: BeforeShipmentComponent, canActivate: [AdminGuard]
  },
  {
    path: 'packing',
    component: DuringPackingComponent, canActivate: [AdminGuard]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
