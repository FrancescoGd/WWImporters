import { Injectable } from '@angular/core';
import { ShoppingCart } from './shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
    currentCategory = '';
    currentSubcategory = '';
    shoppingCart = new ShoppingCart();

    clearStatus() {
      this.currentCategory = '';
      this.currentSubcategory = '';
    }

    setStatus(sKey: string, sValue: string) {
      this.clearStatus();
      this[sKey] = sValue;
    }

    isStatusEmpty() {
      return this.currentCategory === '' && this.currentSubcategory === '';
    }

}
