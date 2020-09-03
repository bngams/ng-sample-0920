import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS } from '../../mocks/products.mock';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { ObservableDemoService } from '../../services/observable-demo.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  // basic implementations
  products: Product[];
  // Async /!\ modifications
  // pros: light syntax
  products$: Observable<Product[]>;

  @ViewChildren(ProductCardComponent)
  productCards: QueryList<ProductCardComponent>;

  // Inject @Injectable class
  constructor(
    private productService: ProductService,
    private demoObsService: ObservableDemoService
  ) { }

  ngOnInit(): void {
    this.demoObsService.demoObservable();
    // this.products = PRODUCTS;
    this.loadProducts();
    this.loadProductsAsync();
  }

  ngAfterViewInit(): void {
    console.log(this.productCards.first);
  }

  loadProductsWithPromise(): void {
    this.productService.getProductsAsPromise().then(
      data => this.products = data
    );
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      data => this.products = data,
      err => console.log('error from observer', err)
    );
  }

  loadProductsAsync(): void {
    this.products$ = this.productService.getProducts();
  }

}
