import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DataService } from '../data.service';
import { Item } from '../item';
import { StatusService } from '../status.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  itemQuantity: number;
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dataService: DataService,
    public appStatus: StatusService
  ) { }

  ngOnInit() {
    const selectedItem = this.route.snapshot.paramMap.get('itemName');
    this.item = this.dataService.getItemDetails(selectedItem);
    this.itemQuantity = 1;
  }

  /**
   * rubric45
   * Clicking the “Back” button should take the user back to where they came from, whether it was the Shopping page or the Product Page.
   */
  goBack(): void {
    this.location.back();
  }

  /**
   * rubric44
   * Clicking the “Add” button should add the number of units specified in the “Qty” input field
   * of the selected product to the shopping cart
   */
  addItem(): void {
    this.appStatus.shoppingCart.addShoppingCartItem(this.item.name, this.item.imagelink, this.item.price, this.itemQuantity);
    // NOTE: at this point we should fire a server call to update stock for real...
    // (I've created a stub function in data.service.ts)
    this.item.stock -= this.itemQuantity;
  }
}
