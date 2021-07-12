import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { CartService } from '../cartdetails/cart.service';
import { CustomerService } from '../customerDetails/customer.service';
import { Customer } from '../user/customer';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  customer: Customer = {
    customerId: 0,
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    username: {
      username: '',
      password: '',
      role: ''
    },
    address: {
      streetNo: '',
      buildingName: '',
      city: '',
      state: '',
      country: '',
      pincode: 0
    }
  }
  cid = 0;

  constructor(private authService: AuthService,
    private cartService: CartService,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getRole() {
    return this.authService.getRole();
  }

  getUser() {
    return this.authService.retrieveUserDetails();
  }

  getUserName() {
    let user: any = '';
    user = this.getUser();
    // console.log(JSON.parse(user).user.username);
    this.cid = JSON.parse(user).user.username;
    return this.cid;
  }
}
