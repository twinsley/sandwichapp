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
  {path: 'order-confirmation', component: OrderConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
