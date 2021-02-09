import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/Services/cart.service';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isAuthenticated: boolean=false;
  subscription: Subscription;
  topBarcartItems: any = [];
  count: number = 0;
  constructor(private cartService: CartService, private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => { 
      this.isAuthenticated = message;
    });
  }

  ngOnInit(): void {
    this.topBarcartItems = this.cartService.getItems();
    this.count = this.cartService.getCartItemscount();
    console.log('test count topbar', this.count)
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  Logout(){
    this.messageService.clearMessages();
  }
}
