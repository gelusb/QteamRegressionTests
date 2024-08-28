class OrderConfirmationPage {
    constructor() {
      this.orderSuccessMessage = '.base';
      this.orderNumber = '.checkout-success';
    }
  
    verifyOrderSuccess() {
      cy.contains(this.orderSuccessMessage, 'Thank you for your purchase!').should('be.visible');
    }
  
    getOrderNumber() {
      return cy.get(this.orderNumber).invoke('text');
    }
  }
  
  export const orderConfirmationPage = new OrderConfirmationPage();
  