import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

const endpoint = '/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductsAsPromise(): Promise<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}${endpoint}`).toPromise();
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiBaseUrl}${endpoint}`).pipe(
      // filter(x => x.price > 10)
    );
  }

  createProduct(p: Product): Observable<Product> {
    // dummy for json-server
    const myDummyProduct = Object.assign({ id: 1 }, p);
    return this.http.post<Product>(`${environment.apiBaseUrl}${endpoint}`, myDummyProduct);
  }
}
