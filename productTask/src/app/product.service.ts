import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = 'https://localhost:3000/products';// https://fakestoreapi.com/products

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  searchProducts(term: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?q=${term}`).pipe(
      map(products => products.filter(product => product.title.toLowerCase().startsWith(term.toLowerCase(),0))),
      map(filteredProducts => filteredProducts.length > 0 ? filteredProducts : [])
    );
  }
}
