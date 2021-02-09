import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor( private cartService:CartService) { }
  cartCount:number=0;
  product:any;
  ngOnInit(): void {
   this.ResetProduct();
  }
  ResetProduct()
  {
    //this.cartCount = this.cartService.getCartItemscount();
    console.log(this.cartCount +' after Cart added')
    this.product = {
      productID:this.cartCount+1,
      name: this.getValuebytype('Product'),
      price:this.getProductAmount(),
      description: this.getValuebytype('Product Test Description '),
      }
  }
  getValuebytype(type:string){
    return "Test " + (this.cartCount+1)+' '+type ;
  }
  getProductAmount(){
    return 12  * (this.cartCount+1);
  }
  addToCart() {
    this.cartCount =this.cartCount+1;
    this.cartService.addToCart(this.product);
    this.ResetProduct();
    
  }
}
