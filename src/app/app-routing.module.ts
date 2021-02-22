import { HomeComponent } from './components/content/home/home.component';
import { CreateAccountComponent } from './components/login/create-account/create-account.component';
import { CartCenterComponent } from './components/content/cart-center/cart-center.component';
import { DisplayDetailItemComponent } from './components/content/display-detail-item/display-detail-item.component';
import { LoginComponent } from './components/login/login.component';
import { SubCategoryDisplayComponent } from './components/content/sub-category-display/sub-category-display.component';
import { CategoryDisplayComponent } from './components/content/category-display/category-display.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
    path: 'create-user',
    component: CreateAccountComponent,
  },
  {
    path: 'cart',
    component: CartCenterComponent,
  },
  { path: 'a', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: 'u', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },

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
