import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Customer } from './user/customer';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

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

  viewAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:8090/osa/display-all-customers", this.getHttpOptions());
  }

}
