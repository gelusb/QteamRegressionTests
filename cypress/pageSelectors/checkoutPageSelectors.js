export class CheckoutPageSelectors{

    emailAddressInput = '#customer-email';
    firstNameInput = '[name="shippingAddress.firstname"]';
    lastNameInput = '[name="shippingAddress.lastname"]';
    addressInput = '[name="street[0]"]';
    cityInput = '[name="shippingAddress.city"]';
    zipCodeInput = '[name="shippingAddress.postcode"]';
    phoneNumberInput = '[name="shippingAddress.telephone"]';
    countryNameInput = 'select[name="country_id"]';
    regionNameInput = 'select[name="region_id"]';           
    selectShippingOption = '.radio';
    clickNextButton = '.button.action.continue.primary';
    placeOrderButton = 'button[title="Place Order"]';
}

export const checkoutPageSelectors = new CheckoutPageSelectors();