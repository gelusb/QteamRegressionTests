import { confirmationPageSelectors } from "../pageSelectors/confirmationPageSelectors";

export class OrderConfirmationPage {

    assertOrderSuccess() {
      cy.contains(confirmationPageSelectors.orderPopUp, 'Thank you for your purchase!').should('be.visible');
    }
  
    getOrderNumber() {
      // de ce functia asta e cu return si restu nu? Plus ca ai putea salva OrderNumberu intr-un alias, cred ca e mai bine
      return cy.get(confirmationPageSelectors.orderConfirmation).invoke('text').as('orderNumber');
    }

    assertEmptyCartMessage(){
      // nu tre sa ai functii de asert, le bagi direct in test aserturile, chainuite de ce ai yielduit in test
      cy.get(confirmationPageSelectors.emptyCartMessage).should('contain.text', 'You have no items in your shopping cart.');
    }
  }
  
  export const orderConfirmationPage = new OrderConfirmationPage();



  