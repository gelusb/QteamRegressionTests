class CartPage {
  updateQuantity(productName, quantity) {
    cy.contains('.cart.items.data.table', productName)
      .find('.input-text.qty')
      .clear()
      .type(quantity);
  }

  //removeProductFromBasket - mai degraba clickRemoveProductFromBasket
  removeProduct(productName) {
    cy.contains('#shopping-cart-table', productName).find('.action.action-delete').click();
  }

  // assertCartTotalPrice
  checkCartTotal(expectedTotal) {
    cy.get('.cart-summary').should('contain', expectedTotal);
  }

  clickOnUpdateShoppingCart(){
    cy.contains('button', 'Update Shopping Cart')
    .click();
  }

  // nu mi dau seama de ce iei aici selectoru cu index, nu e total gresit dar ar fi indicat sa nu fie nevoie, sau daca e, sa vezi daca merge .last() sau .first() in loc de index
  proceedToCheckout() {
    cy.get('button[type="button"][title="Proceed to Checkout"]').eq(1).click();

  }
}

export default CartPage;
