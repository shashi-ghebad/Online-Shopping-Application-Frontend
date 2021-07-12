import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from './address';
import { Customer } from './customer';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  newUser: User = {
    username: '',
    password: '',
    role: ''
  }

  baseUrl = 'http://localhost:8090';
  constructor(private http: HttpClient) { }

  login(userData: User): Observable<User>{
    this.newUser = userData;
    return this.http.post<User>(this.baseUrl + '/authenticate', userData);
  }

  register(customerData: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.baseUrl + '/osa/insert-customer-details', customerData);
  }
   
  address(addressData: Address): Observable<Address>{
    return this.http.post<Address>(this.baseUrl + '/osa/insert-address-details', addressData);
  } 
  

}