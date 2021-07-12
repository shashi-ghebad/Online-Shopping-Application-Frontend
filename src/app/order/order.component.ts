import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customerDetails/customer.service';
import { Order } from '../order';
import { ProductService } from '../product/product.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

myOrderList: Order[]= [];  

myOrder: Order = {
  orderId: 0,
  orderDate: '',
  orderStatus: '',
product: [],
customer: {
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
}

  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private customerService: CustomerService) { }

  ngOnInit(): void {
    let username: any = this.activatedRoute.snapshot.paramMap.get('username');
    console.log(username);
      this.customerService.getCustomerByUsername(username).subscribe((response) => {
      console.log('response' + response);
      this.myOrder.customer = response;
      this.myOrder.customer.customerId = response.customerId;
      console.log(response);
      this.productService.viewOrderList(this.myOrder.customer.customerId).subscribe(response =>{
      this.myOrderList = response;
    });
  });
}
  goToList(){
    console.log(this.myOrder.customer.username);
    this.router.navigate(['list-of-products', this.myOrder.customer.username]);
  }
}
