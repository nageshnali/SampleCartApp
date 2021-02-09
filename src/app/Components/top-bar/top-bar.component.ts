import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
 topBarcartItems:any=[];
 count:number=0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.topBarcartItems=this.cartService.getItems();
    this.count=this.cartService.getCartItemscount();
    console.log('test count topbar',this.count)
  }

}
