import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Components/login/login.component';
import { OrdersComponent } from './Components/orders/orders/orders.component';

const routes: Routes = [
  {path: '', redirectTo: "/login", pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'dashboard', component:DashboardComponent,
children:[
  {path:'orders', component:OrdersComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
