import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {MenuComponent} from './menu/menu.component';
import {BasketComponent} from './basket/basket.component';
import {CustomerOrdersComponent} from './customer-orders/customer-orders.component';
import {HistoryComponent} from './history/history.component';
import {NewMealComponent} from './new-meal/new-meal.component';

const appRoutes: Routes = [
  {path: 'customer', component: CustomerComponent
    , children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'koszyk', component: BasketComponent},
      {path: 'historia', component: CustomerOrdersComponent},
      {path: 'historia2', component: HistoryComponent},
      {path: 'nowe_zamowienie', component: NewMealComponent}
      ]
  },
  { path: '',   redirectTo: '/customer/menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
