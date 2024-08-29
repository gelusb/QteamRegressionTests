import { CartPageSelectors, cartPageSelectors } from "../utils/cartPageSelectors";

export class CartPage {
  
  updateProductQuantity(productName, quantity) {
    cy.contains(cartPageSelectors.cartItemsTable, productName)
      .find(cartPageSelectors.productQuantity)
      .clear()
      .type(quantity);
  }

  clickRemoveProductFromBasket(productName) {
    cy.contains(cartPageSelectors.shoppingCartTable, productName).find(cartPageSelectors.deleteActionIcon).click();
  }

  assertCartTotalPrice(expectedTotal) {
    cy.get(cartPageSelectors.cartSummaryTotal).should('contain', expectedTotal);
  }

  clickOnUpdateShoppingCart(){
    cy.contains('button', 'Update Shopping Cart')
    .click();
  }

  clickOnProceedToCheckout() {
    cy.get(cartPageSelectors.proceedToCheckOutButton).last.click();
  }
}

export const cartPage = new CartPage();
