import { confirmationPageSelectors } from "../utils/confirmationPageSelectors";

export class OrderConfirmationPage {

    assertOrderSuccess() {
      cy.contains(confirmationPageSelectors.orderPopUp, 'Thank you for your purchase!').should('be.visible');
    }
  
    getOrderNumber() {
      return cy.get(confirmationPageSelectors.orderConfirmation).invoke('text');
    }

    assertEmptyCartMessage(){
      cy.get(confirmationPageSelectors.emptyCartMessage).should('contain.text', 'You have no items in your shopping cart.');
    }
  }
  
  export const orderConfirmationPage = new OrderConfirmationPage();



  