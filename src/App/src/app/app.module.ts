import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';

import { MenuitemComponent } from './views/menuItem/menuItem.component';
import { MenuitemDetailComponent } from './views/menuItem-detail/menuItem-detail.component';
import { ToppingComponent } from './views/topping/topping.component';
import { ToppingDetailComponent } from './views/topping-detail/topping-detail.component';
import { CartComponent } from './views/cart/cart.component';
import { AddCustomerComponent } from './views/add-customer/add-customer.component';
import { ViewCustomerComponent } from './views/view-customer/view-customer.component';
import { EditCustomerComponent } from './views/edit-customer/edit-customer.component';
import { CartSummaryComponent } from './views/cart-summary/cart-summary.component';
import { OrderConfirmationComponent } from './views/order-confirmation/order-confirmation.component';
import {PurchaseDataService} from "./services/purchase-data.service";
import { MenuEditComponent } from './views/menu-edit/menu-edit.component';
import { ReportComponent } from './views/report/report.component';
import { SearchComponent } from './views/search/search.component';
import { MenuEditDetailComponent } from './views/menu-edit-detail/menu-edit-detail.component';
import { ToppingEditComponent } from './views/topping-edit/topping-edit.component';
import { ToppingEditDetailComponent } from './views/topping-edit-detail/topping-edit-detail.component';
import { MenuAddComponent } from './views/menu-add/menu-add.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent,
    MenuitemComponent,
    MenuitemDetailComponent,
    ToppingComponent,
    ToppingDetailComponent,
    CartComponent,
    AddCustomerComponent,
    ViewCustomerComponent,
    EditCustomerComponent,
    CartSummaryComponent,
    OrderConfirmationComponent,
    MenuEditComponent,
    ReportComponent,
    SearchComponent,
    MenuEditDetailComponent,
    ToppingEditComponent,
    ToppingEditDetailComponent,
    MenuAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatSortModule
  ],
  providers: [
    PurchaseDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
