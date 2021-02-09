import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
