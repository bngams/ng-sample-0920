import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../mocks/products.mock';
import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  products: Product[];

  @ViewChildren(ProductCardComponent)
  productCards: QueryList<ProductCardComponent>;

  constructor() { }

  ngOnInit(): void {
    this.products = PRODUCTS;
  }

  ngAfterViewInit(): void {
    console.log(this.productCards.first);
  }

}
