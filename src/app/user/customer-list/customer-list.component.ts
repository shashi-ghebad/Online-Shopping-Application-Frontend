import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { AuthService } from 'src/app/auth.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  allCustomer: Customer[] = [];

  myError = '';

  constructor(private adminService: AdminService,
  ) { }

  ngOnInit(): void {
    this.adminService.viewAllCustomers().subscribe((response) => {
      // console.log(response);
      this.allCustomer = response;
    },
      (error) => {
        console.log(error.error.message);
        this.myError = error.error.message;
      });
  }
}


