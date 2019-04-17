import { Component, Input, OnChanges } from '@angular/core';

import { DataService } from '../data.service';
import { Item } from '../item';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnChanges {
  items: Item[];
  filteredItems: Item[];
  itemsInStock: boolean;
  @Input() selectedSubcategory: string;

  constructor(
    private dataService: DataService,
    public appStatus: StatusService
  ) {
    this.itemsInStock = false;
  }

  ngOnChanges() {
    /**
     * rubric26
     * Clicking on a subcategory should repopulate the grid of products with items from the subcategory that was just clicked.
     */
    this.items = this.dataService.getItemsByCategory(this.selectedSubcategory);
    this.filteredItems = this.items; // Let's keep a reference to the original
  }

  /**
   * rubric30
   * Clicking on the “Add” button inside a grid cell should add 1 unit of the associated product to the shopping cart
   */
  addSingleItem(sName: string, sImageLink: string, nPrice: number): void {
    this.appStatus.shoppingCart.addShoppingCartItem(sName, sImageLink, nPrice, 1);
    // TODO: change stock
  }


  /**
   * NOTE: Angular 2+ discourages the use of filter and sort pipes thus I implement them here
   */

  /**
   * rubric29
   * If the “In Stock Only” toggle is checked, only items that are in stock should be shown in the products grid.
   */
  toggleInStock() {
    this.itemsInStock = !this.itemsInStock;
    if (this.itemsInStock) {
      this.filteredItems = this.items.filter(item => +item.stock > 0);
    } else {
      this.filteredItems = this.items;
    }

  }

  /**
   * rubric33
   * Changing the selected sorting method should reorder the products in the grid
   */
  sortItemsBy(sFieldName: string) {
    if (sFieldName !== '') {
      this.filteredItems.sort((a, b) => {
        if (a[sFieldName] < b[sFieldName]) {
          return -1;
        } else if (a[sFieldName] > b[sFieldName]) {
          return 1;
        } else {
          return 0;
        }
      });
    }
  }

}
