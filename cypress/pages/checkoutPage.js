import { checkoutPageSelectors, CheckoutPageSelectors } from "../utils/checkoutPageSelectors";

export class CheckoutPage {
  
    fillShippingDetails(details) {
      cy.get(checkoutPageSelectors.emailAddressInput).type(details.emailAddress);
      cy.get(checkoutPageSelectors.firstNameInput).type(details.firstName);
      cy.get(checkoutPageSelectors.lastNameInput).type(details.lastName);
      cy.get(checkoutPageSelectors.addressInput).type(details.address);
      cy.get(checkoutPageSelectors.cityInput).type(details.city);
      cy.get(checkoutPageSelectors.zipCodeInput).type(details.zipCode);
      cy.get(checkoutPageSelectors.phoneNumberInput).type(details.phoneNumber);
      cy.get(checkoutPageSelectors.countryNameInput).select(details.countryName);
      cy.get(checkoutPageSelectors.regionNameInput).select(details.regionName);
    }

    selectShippingOption(number){
      cy.get(checkoutPageSelectors.selectShippingOption).eq(number).click(); 
    }

    clickOnNextButton() {
      cy.get(checkoutPageSelectors.clickNextButton).click();
    }

    clickPlaceOrderButton(){
      cy.get(checkoutPageSelectors.placeOrderButton).click();
  }
}

export const checkoutPage = new CheckoutPage();
