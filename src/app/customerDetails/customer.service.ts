import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Customer } from '../user/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient,
    private authService: AuthService) { }


  getHttpOptions() {
    let httpOptions = {};
    let userData: any = '';
    userData = this.authService.retrieveUserDetails();
    if (userData != null) {
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

  getCustomer(customerId: number): Observable<Customer> {
    return this.http.get<Customer>("http://localhost:8090/osa/display-customer-by-id/" + customerId, this.getHttpOptions());
  }

  updateCustomer(updateCustomer: Customer): Observable<Customer> {
    return this.http.put<Customer>("http://localhost:8090/osa/update-customer-details", updateCustomer, this.getHttpOptions());
  }

  getCustomerByUsername(username: string): Observable<Customer> {
    return this.http.get<Customer>("http://localhost:8090/osa/uname/" + username, this.getHttpOptions());
  }
}
