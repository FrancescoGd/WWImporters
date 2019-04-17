import { Component, OnInit } from '@angular/core';

import { StatusService } from '../status.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    public appStatus: StatusService
  ) { }

  ngOnInit() {
  }

  /**
   * rubric51
   * The checkout button should create an alert based on the users shipping details and total cost.
   */
  shippingSummary(): void {
    alert('Hello ' + this.appStatus.shoppingCart.customerName + ', please confirm your shipping details:\r\n\r\n'
    + 'Address: ' + this.appStatus.shoppingCart.customerAddress + '\r\n'
    + 'City: ' + this.appStatus.shoppingCart.customerCity + '\r\n'
    + 'Phone Number:' + this.appStatus.shoppingCart.customerPhone + '\r\n\r\n'
    + 'You will receive a package containing a total of ' + this.appStatus.shoppingCart.shoppingCartItems.length + ' products '
    + 'for a total price of ' + this.appStatus.shoppingCart.calculateShoppingCartTotal() + '$'
    );
  }

}
