import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { Cart } from 'src/app/cartdetails/cart';
import { CartService } from 'src/app/cartdetails/cart.service';
import { Customer } from 'src/app/user/customer';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.css']
})
export class ListOfProductsComponent implements OnInit {


  title: string = "LIST OF PRODUCTS";
  allProducts: Product[] = [];

  myError = '';

  username!: string;

  customer!: Customer;


  cartItem: Cart = {
    cartId: 0,
    addingDate: new Date(),
    productId: [],
    customer: {
      ...this.customer
    }
  }

  constructor(private productService: ProductService,
    private router: Router,
    private authService: AuthService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap.get('username'));
    this.username = this.route.snapshot.paramMap.get('username')!
    this.productService.getCustomerIdByUsername(this.username).subscribe((response => {
      // console.log(response);
      this.customer = response;
      this.cartItem.customer = response;
    }))
    this.productService.getAllProducts().subscribe((response) => {
      // console.log(response);
      this.allProducts = response;
    },
      (error) => {
        console.log(error.error.message);
        this.myError = error.error.message;
      });
    console.log("this is after the asynchronous call");
  }

  editProduct(prodId: number) {
    // console.log(prodId);
    this.router.navigate(['edit-product', prodId]);
  }

  deleteProduct(prodId: number) {
    // console.log(prodId);
    this.productService.deleteProduct(prodId).subscribe((response) => {
      // console.log(response);
      this.allProducts = response;
    },
      (error) => {
        console.log(error.error.message);
        this.allProducts = [];
        this.myError = error.error.message;
      });
  }



  addToCart(product: Product) {
    console.log(product)

    this.productService.findCustomerInCart(this.cartItem.customer.customerId).subscribe(response => {
      console.log(response);
      if (response == null) {
        this.cartItem.cartId = 0;
      }
      else {
        this.cartItem.cartId = response.cartId;
        this.cartItem.productId = [
          ...response.productId
        ]
      }
      this.cartItem.productId.push(product)
      this.cartService.addToCart(this.cartItem).subscribe(response => {
        console.log(response);
      });
    });

    console.log(this.cartItem);
  }


  getRole() {
    return this.authService.getRole();
  }

  getUser() {
    return this.authService.retrieveUserDetails();
  }

  viewCart() {
    this.router.navigate(['cart', this.cartItem.customer.customerId])
  }
}