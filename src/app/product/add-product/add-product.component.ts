import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductDetails: Product = {
    productId: 0,
    productName: '',
    price: 0,
    color: '',
    dimension: '',
    specification: '',
    manufacturer: '',
    quantity: 0,
    productImageUrl: '',
    category: {
      catId: 0,
      categoryName: ''
    }
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  addProduct() {
    let copyProducts: Product = {
      productId: this.addProductDetails.productId,
      productName: this.addProductDetails.productName,
      price: this.addProductDetails.price,
      color: this.addProductDetails.color,
      dimension: this.addProductDetails.dimension,
      specification: this.addProductDetails.specification,
      manufacturer: this.addProductDetails.manufacturer,
      quantity: this.addProductDetails.quantity,
      productImageUrl: this.addProductDetails.productImageUrl,
      category: {
        catId: this.addProductDetails.category.catId,
        categoryName: this.addProductDetails.category.categoryName
      }
    }

    this.productService.addProduct(copyProducts).subscribe((response) => {
      // console.log(response);
      this.router.navigate(['list-of-products', 'username']);
    });

  }


}