import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Product } from '../product/product';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,
    private authService: AuthService
    ) { }

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
  
  getCartItems(): Observable<any> {
    return this.http.get<any>("http://localhost:8090/osa/view-all-cart-details", this.getHttpOptions());
  }

  addToCart(cart: Cart): Observable<Cart> {
    console.log(this.getHttpOptions());
    console.log(cart);
    return this.http.post<Cart>("http://localhost:8090/osa/add-product-to-cart", cart , this.getHttpOptions());
  }

}
