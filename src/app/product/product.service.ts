import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Cart } from '../cartdetails/cart';
import { Order } from '../order';
import { Customer } from '../user/customer';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

    getHttpOptions() {
    let httpOptions ={};
    let userData: any='';
    userData= this.authService.retrieveUserDetails();
    if(userData !=null){
    let token = JSON.parse(userData).token;
    console.log("token:" + token);
     httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token 
      })
    }
  }
  return httpOptions;
  }
  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8090/osa/display-all-products-details", this.getHttpOptions());
 }

  addProduct(newProduct: Product) : Observable<Product> {
    return this.http.post<Product>
    ("http://localhost:8090/osa/insert-product-details", newProduct, this.getHttpOptions());
  }

  updateProduct(updatedProduct: Product) : Observable<Product> {
    return this.http.put<Product>
    ("http://localhost:8090/osa/update-product-details", updatedProduct, this.getHttpOptions());
  }

  getProduct(productId: number) : Observable<Product> {
    return this.http.get<Product>
    ("http://localhost:8090/osa/display-product-by-id/" + productId, this.getHttpOptions());
  }

  
  deleteProduct(prodId: number) :Observable<Product[]> {
    return this.http.delete<Product[]>
    ("http://localhost:8090/osa/delete-product-by-id/" + prodId, this.getHttpOptions());
  }

  getCustomerIdByUsername(username: string): Observable<Customer>{
    return this.http.get<Customer>("http://localhost:8090/osa/uname/" + username, this.getHttpOptions());
  }

  findCustomerInCart(customerId: number): Observable<Cart>{
    return this.http.get<Cart>("http://localhost:8090/osa/find-customer/" + customerId, this.getHttpOptions());
  }

  findByCustomerId(username: string): Observable<Customer>{
    return this.http.get<Customer>("http://localhost:8090/osa/get-customer-by-id/" + username, this.getHttpOptions());
  }

  addOrder(newOrder: Order): Observable<Order>{
    return this.http.post<Order>("http://localhost:8090/osa/insert-order-details", newOrder,this.getHttpOptions());
  }

  findOrderByOrderId(orderId: number): Observable<Order>{
    return this.http.get<Order>("http://localhost:8090/osa/display-order-by-id/" + orderId, this.getHttpOptions());
  }

  viewOrderList(customerId: number): Observable<Order[]>{
    return this.http.get<Order[]>("http://localhost:8090/osa/get-order-by-id/" + customerId, this.getHttpOptions());
  }
 
}
