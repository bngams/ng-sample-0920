import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Output() newProduct = new EventEmitter<Product>();

  productForm: FormGroup;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  submitProduct(): void {
    console.log('submitProduct');
    const p: Product = this.productForm.getRawValue();
    this.productService.createProduct(p).subscribe(
      createdProduct => this.newProduct.emit(createdProduct)
    );
  }

}
