import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { Customer } from 'src/app/user/customer';
import { Cart } from '.';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  customer!: Customer;

  cartItem: Cart = {
    cartId: 0,
    addingDate: new Date(),
    productId: [],
    customer: {
      ...this.customer
    }
  }

  totalSum: number = 0;
  addedProduct: any[] = [];
  product: any;
  cartData: any;
  message: string = '';


  constructor(private cartService: CartService, private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let customerId: any = this.activatedRoute.snapshot.paramMap.get('customerId');
    this.productService.findCustomerInCart(customerId).subscribe(response => {
      //  console.log('this.cartData');
      // console.log(response);
      if(response==null || response.productId.length==0){
      this.message= 'Cart Is Empty, Please Add Products To The Cart';
      }else{
        this.message='';
      this.cartItem = response;
      }
    })   
  }

  delete(productId: any) {
    for(let i=0;i<this.cartItem.productId.length;i++){
      if(this.cartItem.productId[i].productId==productId){
      this.cartItem.productId.splice(i,1);
      break;
      }
    }
    this.cartService.addToCart(this.cartItem).subscribe(response =>{
      // console.log(response);
      this.cartItem=response;
    });
  }
  
  placeOrder(productId: number){
    let order =  {
        orderId: 0,
        orderDate: new Date(),
        orderStatus: 'Arrived',
        product: [
          ...this.cartItem.productId,
                ],
        customer: {
         ...this.cartItem.customer
        }
    }
    console.log(order);
    this.productService.addOrder(order).subscribe(response =>{
    // console.log(response);
    let orderId = response.orderId;
    this.cartItem.productId = [];
    this.cartService.addToCart(this.cartItem).subscribe(response =>{
      // console.log(response);
       this.router.navigate(['order-placed']);
    });
     
    })
    
  }
  back(){
    this.router.navigate(['home']);
  }
}




