class ProductPage {

  /// Selectorii trebuia salvati toti ca pe CheckoutPage, ca iar i-ai bagat in functii si daca un selector se schimba si l-ai folosit in 10 functii, ai de schimbat in 10 locuri

    selectSize(size) {
      cy.get('.swatch-option.text').contains(size).click();
    }
  
    selectColor(color) {
      // functia asta e nice facuta la faza cu color, practic construiesti selectoru cand ii dai parametru, aia e super da nu cred ca trebuia sa aiba si assert
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
  