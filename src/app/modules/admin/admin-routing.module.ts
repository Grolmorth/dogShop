import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from 'src/app/components/admin/add-product/add-product.component';
import { AfterShipmentComponent } from 'src/app/components/admin/after-shipment/after-shipment.component';
import { BeforeShipmentComponent } from 'src/app/components/admin/before-shipment/before-shipment.component';
import { DuringPackingComponent } from 'src/app/components/admin/during-packing/during-packing.component';
import { EditProductComponent } from 'src/app/components/admin/edit-product/edit-product.component';
import { ManageShipmentComponent } from 'src/app/components/admin/manage-shipment/manage-shipment.component';
import { ProductListComponent } from 'src/app/components/admin/product-list/product-list.component';
import { AdminGuard } from 'src/app/services/admin.guard';

const adminRoutes: Routes = [{
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
}];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
