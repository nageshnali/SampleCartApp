import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  itemsCount = this.cartService.getCartItemscount();
  constructor( private cartService: CartService) { }

  ngOnInit(): void {
  }
  
}
