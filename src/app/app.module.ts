import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cartdetails/cart/cart.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { RegisterComponent } from './user/register/register.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListOfProductsComponent } from './product/list-of-products/list-of-products.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customerDetails/customer/customer.component';
import { CustomerListComponent } from './user/customer-list/customer-list.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    CartComponent,
    OrderComponent,
    HeaderComponent,
    ListOfProductsComponent,
    EditProductComponent,
    AddProductComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    CustomerComponent,
    CustomerListComponent,
    OrderPlacedComponent
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
