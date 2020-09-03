import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Output() newProduct = new EventEmitter<Product>();

  productForm: FormGroup;

  constructor() { }

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
    this.newProduct.emit(p);
  }

}
