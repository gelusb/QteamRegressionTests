export class CheckoutPage {
    constructor() {
      this.emailAddressInput = '#customer-email'
      this.firstNameInput = '[name="shippingAddress.firstname"]';
      this.lastNameInput = '[name="shippingAddress.lastname"]';
      this.addressInput = '[name="street[0]"]';
      this.cityInput = '[name="shippingAddress.city"]';
      this.zipCodeInput = '[name="shippingAddress.postcode"]';
      this.phoneNumberInput = '[name="shippingAddress.telephone"]';
      this.countryNameInput = 'select[name="country_id"]';
      this.regionNameInput = 'select[name="region_id"]';           
      this.selectShippingOption = '.radio';
      this.clickNextButton = '.button.action.continue.primary';
      this.placeOrderButton = 'button[title="Place Order"]';
    }
  
    fillShippingDetails(details) {
      cy.get(this.emailAddressInput).type(details.emailAddress);
      cy.get(this.firstNameInput).type(details.firstName);
      cy.get(this.lastNameInput).type(details.lastName);
      cy.get(this.addressInput).type(details.address);
      cy.get(this.cityInput).type(details.city);
      cy.get(this.zipCodeInput).type(details.zipCode);
      cy.get(this.phoneNumberInput).type(details.phoneNumber);
      cy.get(this.countryNameInput).select(details.countryName);
      cy.get(this.regionNameInput).select(details.regionName);
      
    }

    selectShipping(number){
      cy.get(this.selectShippingOption).eq(number).click(); 
    }

    clickOnNextButton() {
      cy.get(this.clickNextButton).click();
    }

    placeOrder(){
      cy.get(this.placeOrderButton).click();

    }
  }
  
  export const checkoutPage = new CheckoutPage();
  