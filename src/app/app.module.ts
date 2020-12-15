import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { MenuComponent } from './menu/menu.component';
import { CustomerComponent } from './customer/customer.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { BasketComponent } from './basket/basket.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { OrderComponent } from './order/order.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import {AuthService} from './services/auth.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


const firebaseConfig = {
  apiKey: 'AIzaSyDXxpxn5Lk8IZiyQDtQDbh9QPxnaDml4jE',
  authDomain: 'sharemeal-f6381.firebaseapp.com',
  databaseURL: 'https://sharemeal-f6381.firebaseio.com',
  projectId: 'sharemeal-f6381',
  storageBucket: 'sharemeal-f6381.appspot.com',
  messagingSenderId: '135229201487',
  appId: '1:135229201487:web:2b727afd03660027891e3a',
  measurementId: 'G-5PZ026Z6RH'
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomerComponent,
    BasketComponent,
    CustomerOrdersComponent,
    HistoryComponent,
    LoginComponent,
    NewMealComponent,
    OrderComponent,
    RegisterComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AppRoutingModule,
    AngularFireAuthModule
  ],
  providers: [AngularFirestore, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
