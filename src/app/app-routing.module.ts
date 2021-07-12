import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cartdetails/cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customerDetails/customer/customer.component';
import { HomeComponent } from './home/home.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { OrderComponent } from './order/order.component';

import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ListOfProductsComponent } from './product/list-of-products/list-of-products.component';
import { CustomerListComponent } from './user/customer-list/customer-list.component';

import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: 'authenticate', component : LoginComponent
  },
  {
    path: 'register', component : RegisterComponent
  },
  {
    path: 'logout', component : LogoutComponent
  },
  {
    path: 'list-of-products/:username', component : ListOfProductsComponent
  },
  {
    path: 'edit-product/:prodId', component : EditProductComponent
  }, 
  {
    path: 'add-product', component : AddProductComponent
  }, 
  {
    path: 'cart/:customerId', component : CartComponent
  },
  {
    path: 'list-of-products', component : ListOfProductsComponent
  },
  {
    path: 'contact', component : ContactComponent
  },
  {
    path: 'about', component : AboutComponent
  },
  {
    path: '', component : HomeComponent
  },
  {
    path: 'home', component : HomeComponent
  },
  {
    path: 'cart', component : CartComponent
  },
  {
    path: 'order/:username', component : OrderComponent
  },
  {
    path: 'customer/:username', component : CustomerComponent
  },
  {
    path: 'order/:orderId', component : OrderComponent
  },
  {
    path: 'order', component : OrderComponent
  },
  {
    path: 'customer-list', component : CustomerListComponent
  },
  {
    path: 'order-placed/:username', component : OrderPlacedComponent
  },
  {
    path: 'order-placed', component : OrderPlacedComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
