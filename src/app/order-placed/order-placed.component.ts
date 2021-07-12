import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product/product.service';
import { Customer } from '../user/customer';


@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit {

  username!: string;

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
    username:{
    username: '',
    password: '',
    role: ''
  }
}


  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void { }

  list(){
    this.router.navigate(['home']);
  }
}
