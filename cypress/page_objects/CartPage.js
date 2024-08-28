class CartPage {
    updateQuantity(productName, quantity) {
      cy.contains('.cart.items.data.table', productName)
        .find('.input-text.qty')
        .clear()
        .type(quantity);
    }
  
    removeProduct(productName) {
      cy.contains('#shopping-cart-table', productName).find('.action.action-delete').click();
    }
  
    checkCartTotal(expectedTotal) {
      cy.get('.cart-summary').should('contain', expectedTotal);
    }

    clickOnUpdateShoppingCart(){
      cy.contains('button', 'Update Shopping Cart')
      .click();
    }
  
    proceedToCheckout() {
      cy.get('button[type="button"][title="Proceed to Checkout"]').eq(1).click();

    }
  }
  
export default CartPage;
  