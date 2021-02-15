import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { CustomPaginator } from 'src/app/services/customPaginatorConfiguration';
import { CartDisplayComponent } from 'src/app/components/cart/cart-display/cart-display.component';
import { CartItemComponent } from 'src/app/components/cart/cart-item/cart-item.component';
import { AllProductsDisplayComponent } from 'src/app/components/content/all-products-display/all-products-display.component';
import { CategoryDisplayComponent } from 'src/app/components/content/category-display/category-display.component';
import { DisplayDetailItemComponent } from 'src/app/components/content/display-detail-item/display-detail-item.component';
import { DisplayItemComponent } from 'src/app/components/content/display-item/display-item.component';
import { ProductPathComponent } from 'src/app/components/content/product-path/product-path.component';
import { SubCategoryDisplayComponent } from 'src/app/components/content/sub-category-display/sub-category-display.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CreateAccountComponent } from 'src/app/components/login/create-account/create-account.component';
import { ForgotPasswordComponent } from 'src/app/components/login/forgot-password/forgot-password.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { MenuPanelComponent } from 'src/app/components/menu-panel/menu-panel.component';
import { NavDisplayItemComponent } from 'src/app/components/nav/nav-display-item/nav-display-item.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { CurrencyPlnPipe } from 'src/app/pipes/currency-pln.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  imports: [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSortModule,
    MatAutocompleteModule,
    MatPaginatorModule,

  ],
  declarations: [
    NavComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    NavDisplayItemComponent,
    CategoryDisplayComponent,
    SubCategoryDisplayComponent,
    ProductPathComponent,
    DisplayItemComponent,
    DisplayDetailItemComponent,
    CartItemComponent,
    CartDisplayComponent,
    MenuPanelComponent,
    CurrencyPlnPipe,
    AllProductsDisplayComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,

  ],

  exports: [
    NavComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    NavDisplayItemComponent,
    CategoryDisplayComponent,
    SubCategoryDisplayComponent,
    ProductPathComponent,
    DisplayItemComponent,
    DisplayDetailItemComponent,
    CartItemComponent,
    CartDisplayComponent,
    MenuPanelComponent,
    CurrencyPlnPipe,
    AllProductsDisplayComponent,
    CreateAccountComponent,
    ForgotPasswordComponent,

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSortModule,
    MatAutocompleteModule,
    MatPaginatorModule,
  ],
  providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginator() }]
})
export class SharedModule { }
