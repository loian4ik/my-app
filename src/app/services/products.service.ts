import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import {catchError, delay, retry, tap, throwError} from 'rxjs'
import { IProduct } from "../models/product"
import { Observable } from "rxjs";

@Injectable ({
    providedIn: 'root'
})
export class ProductsService {
  products: IProduct[];
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {limit: 7} //shows special number of products
      })
}) .pipe(
  delay(2000),
  retry(2),
  tap(products => this.products = products),
  catchError(this.errorHandler.bind(this))
  
 )
}

create(product: IProduct): Observable<IProduct> {
  return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
  .pipe(
    tap(prod => this.products.push(prod))
  )
    
}



   private errorHandler(error: HttpErrorResponse) {
     return throwError( () => error.message)
   }
}
