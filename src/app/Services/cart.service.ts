import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
 
  items:any = [];

  addToCart(product:any) {
    console.log('getItems')
    this.items.push(product);
  }

  getItems() {
    console.log('addToCart')
    return this.items;
  }

  getCartItemscount() {
    console.log('test count',this.items.length)
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getAllProducts() {
    return this.http.get('/assets/products/products.json');
  }

}
