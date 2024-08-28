class OrderConfirmationPage {
    constructor() {
      // aici nu inteleg de ce trebe this.orderSuccessMessage? ca tu aici il creezi
      this.orderSuccessMessage = '.base';
      this.orderNumber = '.checkout-success';
    }
  
    verifyOrderSuccess() {
      cy.contains(this.orderSuccessMessage, 'Thank you for your purchase!').should('be.visible');
    }
  
    getOrderNumber() {

      // e interesant ca ai aici return, da nu e ok sa ai la o functie return si la restu nu,
      // plus ca is mai complicate chestiile ce le faci aici si nu o sa stii sa le explici
      return cy.get(this.orderNumber).invoke('text');
    }
  }
  
  export default OrderConfirmationPage;


  // Nu-s ok aici cum is create clasele, nu tre sa folosesti constructor, uitate in projectele mai vechi in care te-o ajutat florin
  // si tot folderu asta numeste-l pages nu page_objects


  