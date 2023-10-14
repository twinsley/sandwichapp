import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuitemComponent } from './views/menuItem/menuItem.component';
import { MenuitemDetailComponent } from './views/menuItem-detail/menuItem-detail.component';
import { ToppingComponent } from './views/topping/topping.component';
import { ToppingDetailComponent } from './views/topping-detail/topping-detail.component';
import { ViewCustomerComponent } from './views/view-customer/view-customer.component';
import { AddCustomerComponent } from './views/add-customer/add-customer.component';
import { EditCustomerComponent } from './views/edit-customer/edit-customer.component';
import { CartSummaryComponent } from './views/cart-summary/cart-summary.component';
import { OrderConfirmationComponent } from './views/order-confirmation/order-confirmation.component';
import {SearchComponent} from "./views/search/search.component";
import {ReportComponent} from "./views/report/report.component";
import {MenuEditDetailComponent} from "./views/menu-edit-detail/menu-edit-detail.component";
import {MenuEditComponent} from "./views/menu-edit/menu-edit.component";
import {ToppingEditDetailComponent} from "./views/topping-edit-detail/topping-edit-detail.component";
import {ToppingEditComponent} from "./views/topping-edit/topping-edit.component";
import {MenuAddComponent} from "./views/menu-add/menu-add.component";

const routes: Routes = [
  { path: '', redirectTo: '/menuItem', pathMatch: 'full' },
  {path: 'menuItem', component: MenuitemComponent},
  {path: 'menuItem-detail/:menuItemId', component: MenuitemDetailComponent},
  {path: 'menuItem/:menuItemId/toppings', component: ToppingComponent},
  {path: 'menuItem/:menuItemId/toppings/:toppingId', component: ToppingDetailComponent},
  {path: 'customer', component: ViewCustomerComponent},
  {path: 'customer/new', component: AddCustomerComponent},
  {path: 'customer/:customerId', component: EditCustomerComponent},
  {path: 'cart-summary', component: CartSummaryComponent},
  {path: 'order-confirmation', component: OrderConfirmationComponent},
  {path: 'search', component: SearchComponent},
  {path: 'report', component: ReportComponent},
  {path: 'menuedit', component: MenuEditComponent},
  {path: 'menuedit/:menuItemId', component: MenuEditDetailComponent},
  {path: 'toppingedit', component: ToppingEditComponent},
  {path: 'toppingedit/:menuItemId', component: ToppingEditDetailComponent},
  {path: 'menuadd/new', component: MenuAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
