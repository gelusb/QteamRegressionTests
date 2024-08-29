import { productPageSelectors } from "../pageSelectors/productPageSelectors";

export class ProductPage {

  /// Selectorii trebuia salvati toti ca pe CheckoutPage, ca iar i-ai bagat in functii si daca un selector se schimba si l-ai folosit in 10 functii, ai de schimbat in 10 locuri

    selectProductSize(size) {
      cy.get(productPageSelectors.productSizeOption).contains(size).click();
    }
  
    selectProductColor(color) {
      // functia asta e nice facuta la faza cu color, practic construiesti selectoru cand ii dai parametru, aia e super da nu cred ca trebuia sa aiba si assert
      cy.get(productPageSelectors.colorOption(color), { timeout: 10000 }).should('be.visible').click()
    }
  
    adjustProductQuantity(quantity) {
      cy.get(productPageSelectors.productQuantityBox).clear().type(quantity);
    }
  
    clickOnAddToCartButton() {
      cy.get(productPageSelectors.addToCartButton).click();
    }
  
    clickOnShoppingCart() {
      cy.get(productPageSelectors.messageSuccessPopUp).contains('a', 'shopping cart').click();

    }
  }
  
export  const productPage = new ProductPage;
  