export class ShoppingCart {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  customerCity: string;
  shippable: boolean;
  shoppingCartItems = [];

  constructor() {
    this.customerName = '';
    this.customerPhone = '';
    this.customerAddress = '';
    this.customerCity = '';
    this.shippable = false;
  }

  set isShippable(bShippable) {
    this.shippable = bShippable;
  }

  addShoppingCartItem(sName: string, sImage: string, nPrice: number, nQuantity: number) {
    const ixIndex = this.shoppingCartItems.findIndex(item => item.Name === sName);
    if (ixIndex === -1) {
      this.shoppingCartItems.push({'Name': sName, 'Image': sImage, 'Price': nPrice, 'Quantity': nQuantity});
    } else {
      this.setShoppingCartItemQuantity(sName, nQuantity);
    }
  }

  /**
   * rubric54
   * The remove button should remove an item from the shopping cart
   */
  removeShoppingCartItem(sName: string) {
    const ixIndex = this.shoppingCartItems.findIndex(item => item.Name === sName);
    this.shoppingCartItems.splice(ixIndex, 1);
  }

  setShoppingCartItemQuantity(sName: string, nQuantity: number) {
    const ixIndex = this.shoppingCartItems.findIndex(item => item.Name === sName);
    this.shoppingCartItems[ixIndex].Quantity = nQuantity;
  }

  /**
   * rubric55
   * The cost column in the table should update if the quantity input field is changed
   */
  calculateLineTotal(nPrice: number, nQuantity: number) {
    return Math.round((nPrice * nQuantity) * 100) / 100;
  }

  calculateShoppingCartSubtotal(): number {
    let nSubtotal = 0;
    for (const ixItem in this.shoppingCartItems) {
      if (this.shoppingCartItems.hasOwnProperty(ixItem)) {
        nSubtotal += this.shoppingCartItems[ixItem].Price * this.shoppingCartItems[ixItem].Quantity;
      }
    }
    return Math.round(nSubtotal * 100) / 100;
  }

  /**
   * rubric53
   * The cost details section should update if any items are removed from the shopping cart of if any of the item quantities are updated
   */
  calculateShoppingCartTotal(): number {
    return Math.round((this.calculateShoppingCartSubtotal() + this.calculateTaxAmount()) * 100) / 100;
  }

  calculateTaxAmount(nTaxFee: number = 10): number {
    return Math.round((this.calculateShoppingCartSubtotal() * nTaxFee / 100) * 100) / 100;
  }

}
