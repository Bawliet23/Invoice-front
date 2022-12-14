import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { HistoryComponent } from './history/history.component';
import { AuthGuard } from './services/auth-guard.service';


// const redirectToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  {path: '',component: HomeComponent, pathMatch: 'full'},
  {path: 'invoice', component: InvoiceComponent,canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent,canActivate: [AuthGuard],
      children: [
        {path: 'products', component: ProductsComponent},
        {path: 'history', component: HistoryComponent},
       ]
    },
    // {path: 'products', component: ProductsComponent},
    // {path: 'history', component: HistoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


