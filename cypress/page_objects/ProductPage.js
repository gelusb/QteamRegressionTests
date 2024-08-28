class ProductPage {
    selectSize(size) {
      cy.get('.swatch-option.text').contains(size).click();
    }
  
    selectColor(color) {
      cy.get(`[option-label="${color}"]`, { timeout: 10000 }).should('be.visible').click()
    }
  
    adjustQuantity(quantity) {
      cy.get('#qty').clear().type(quantity);
    }
  
    addToCart() {
      cy.get('#product-addtocart-button').click();
    }
  
    goToCart() {
      cy.get('.message-success.success.message').contains('a', 'shopping cart').click();

    }
  }
  
export  default ProductPage;
  