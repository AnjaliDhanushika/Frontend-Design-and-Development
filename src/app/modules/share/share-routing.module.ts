
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShareComponent} from "./share.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const shareRoutes: Routes = [
  { path: '', component: ShareComponent },
  {path:'dashboard' ,component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(shareRoutes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
