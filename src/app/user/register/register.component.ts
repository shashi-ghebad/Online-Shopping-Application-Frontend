import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addCustomerData = {
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
      pincode: ''
    },
    username: {
      username: '',
      password: '',
      role: "customer",
    }
  }

  constructor(private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
    
  }
  register(){
    console.log(this.addCustomerData);
    this.loginService.register(this.addCustomerData).subscribe((response) => {
      // console.log(response);
     this.router.navigate(['authenticate']);
    },
    (error) => {
      console.log(error);
    })
  }

}
