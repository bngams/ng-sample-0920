import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Output() newProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  submitProduct(): void {
    console.log('submitProduct');
    this.newProduct.emit(
      { name: 'ProductAdd', price: 15 }
    );
  }

}
