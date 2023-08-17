import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import {ShareRoutingModule} from "./share-routing.module";
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    ShareComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent
  ],
    exports: [
        FooterComponent,
        DashboardComponent,
        SidebarComponent
    ],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }
