import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SecurityComponent} from "./security.component";
import {SecurityRoutingModule} from "./security-routing.module";
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import {ShareModule} from "../share/share.module";
import { CustomerDetailsPageComponent } from './components/customer-details-page/customer-details-page.component';
import { AllCustomerPageComponent } from './components/customer-details-page/all-customer-page/all-customer-page.component';
import { NewCustomerPageComponent } from './components/customer-details-page/new-customer-page/new-customer-page.component';
import { UpdateCustomerDetailsComponent } from './components/customer-details-page/update-customer-details/update-customer-details.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { ItemSelectPageComponent } from './components/order-page/item-select-page/item-select-page.component';
import { OrderDetailsPageComponent } from './components/order-page/order-details-page/order-details-page.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';

@NgModule({
  declarations: [
    SecurityComponent,
    SignInPageComponent,
    SignUpPageComponent,
    CustomerDetailsPageComponent,
    AllCustomerPageComponent,
    NewCustomerPageComponent,
    UpdateCustomerDetailsComponent,
    OrderPageComponent,
    ItemSelectPageComponent,
    OrderDetailsPageComponent,
    PaymentPageComponent,
    ItemPageComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ShareModule
  ]
})
export class SecurityModule { }
