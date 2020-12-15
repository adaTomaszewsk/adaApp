import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthGuard} from './shared/guard/auth.guard';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {CustomerComponent} from './customer/customer.component';
import {MenuComponent} from './menu/menu.component';
import {BasketComponent} from './basket/basket.component';
import {CustomerOrdersComponent} from './customer-orders/customer-orders.component';
import {HistoryComponent} from './history/history.component';
import {NewMealComponent} from './new-meal/new-meal.component';



const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'customer', component: CustomerComponent
    , children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
      {path: 'koszyk', component: BasketComponent, canActivate: [AuthGuard] },
      {path: 'historia', component: CustomerOrdersComponent, canActivate: [AuthGuard] },
      {path: 'historia2', component: HistoryComponent, canActivate: [AuthGuard] },
      {path: 'nowe_zamowienie', component: NewMealComponent, canActivate: [AuthGuard] }
    ]
  },
];
// const appRoutes: Routes = [
//   {path: 'customer', component: CustomerComponent
//     , children: [
//       {path: '', redirectTo: 'menu', pathMatch: 'full'},
//       {path: 'menu', component: MenuComponent},
//       {path: 'koszyk', component: BasketComponent},
//       {path: 'historia', component: CustomerOrdersComponent},
//       {path: 'historia2', component: HistoryComponent},
//       {path: 'nowe_zamowienie', component: NewMealComponent}
//     ]
//   },
//   { path: '',   redirectTo: '/customer/menu', pathMatch: 'full' },
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
