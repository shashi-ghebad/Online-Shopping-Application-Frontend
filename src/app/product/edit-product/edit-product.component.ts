import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  editForm: FormGroup;
  
  constructor(private productService: ProductService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router) {
      this.editForm = new FormGroup({
        productId: new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(15)]),
        productName: new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
        price: new FormControl("",[Validators.required,Validators.minLength(1),Validators.maxLength(15)]),
        color: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
        dimension: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
        specification: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
        manufacturer: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
        quantity: new FormControl("",[Validators.required,Validators.minLength(1),Validators.maxLength(15)]),
        productImageUrl: new FormControl("",[Validators.required,Validators.minLength(1),Validators.maxLength(2000)]),
        category: new FormGroup({
          catId: new FormControl("",[Validators.required,Validators.minLength(1),Validators.maxLength(15)]),
          categoryName: new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(15)])
        })
      });
    }

  ngOnInit(): void {
    let productId: any=this.activatedRoute.snapshot.paramMap.get('prodId');
     this.productService.getProduct(productId).subscribe((response) => {
      this.editForm.setValue(response);
      // console.log(response);
      // console.log(this.editForm.value.category);
     });
  }

  editProduct() {
    // console.log(this.editForm);
    // console.log(this.editForm.value);
    this.productService.updateProduct(this.editForm.value).subscribe((response) => {
      // console.log(response);
      this.router.navigate(['list-of-products', 'username']);
    });
    
  }

}
