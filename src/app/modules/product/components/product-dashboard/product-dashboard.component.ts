import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  @ViewChild(ProductListComponent)
  productListComp: ProductListComponent;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(p: Product): void {
    this.productListComp.products.push(p);
  }

}
