import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { Customer } from 'src/app/user/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  constructor(private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  customer: Customer = {
    customerId: 0,
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    address: {
      streetNo: '',
      buildingName: '',
      city: '',
      state: '',
      country: '',
      pincode: 0
    },
    username: {
      username: '',
      password: '',
      role: ''
    }
  }


  ngOnInit(): void {
    let username: any = this.activatedRoute.snapshot.paramMap.get('username');
    console.log(username);
    this.customerService.getCustomerByUsername(username).subscribe((response) => {
      //  console.log('response' + response)
      this.customer = response;
      // console.log(response);

    });
  }


  editCustomer() {
    console.log(this.customer)
    this.customerService.updateCustomer(this.customer).subscribe((response) => {
      // console.log(response);
      this.router.navigate(['list-of-products', response.username]);
    });

  }

}
