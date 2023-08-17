import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInPageComponent} from "./components/sign-in-page/sign-in-page.component";
import {SecurityComponent} from "./security.component";
import {SignUpPageComponent} from "./components/sign-up-page/sign-up-page.component";
import {CustomerDetailsPageComponent} from "./components/customer-details-page/customer-details-page.component";
import {OrderPageComponent} from "./components/order-page/order-page.component";
import {OrderDetailsPageComponent} from "./components/order-page/order-details-page/order-details-page.component";
import {
  NewCustomerPageComponent
} from "./components/customer-details-page/new-customer-page/new-customer-page.component";
import {PaymentPageComponent} from "./components/payment-page/payment-page.component";
import {ItemPageComponent} from "./components/item-page/item-page.component";

const routes: Routes = [
  {
    path: '', component: SecurityComponent, children: [
      {path: '', redirectTo: '/share/dashboard', pathMatch: 'full'},
      {path: 'sign-in', component: SignInPageComponent},
      {path: 'sign-up', component: SignUpPageComponent},
      {path: 'customer', component: CustomerDetailsPageComponent},
      {path: 'order', component: OrderPageComponent},
      {path:'order-details' , component:OrderDetailsPageComponent},
      {
        path:'new-customer' , component:NewCustomerPageComponent
      },
      {path:'payments' ,component:PaymentPageComponent},
      {path:'item'  ,component:ItemPageComponent}

    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
