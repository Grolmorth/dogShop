import { SubCategoryDisplayComponent } from './components/content/sub-category-display/sub-category-display.component';
import { CategoryDisplayComponent } from './components/content/category-display/category-display.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




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
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
