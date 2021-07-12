import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addUserData = {
    username: '',
    password: '',
    role: ''
  }

  constructor(private loginService: LoginService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {

  }

  login() {
    console.log(this.addUserData);
    this.loginService.login(this.addUserData).subscribe((response) => {
      console.log(response);
      this.authService.storeUserDetails(JSON.stringify(response));
      this.authService.setRole(this.addUserData.role);

      if (this.addUserData.role == "customer") {
        this.router.navigate(['list-of-products', this.addUserData.username]);

      }
      else if (this.addUserData.role == "admin") {
        this.router.navigate(['list-of-products']);
      }
    },

      (error) => {
        console.log(error);
      })
  }
}


