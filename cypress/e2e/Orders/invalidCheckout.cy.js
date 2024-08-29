import {homePage} from '../../pages/homePage';
import {productPage} from '../../pages/productPage';
import {cartPage} from '../../pages/cartPage';
import {checkoutPage} from '../../pages/checkoutPage';
import testData from '../../fixtures/testData.json';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Invalid Checkout Scenarios', () => {

  it('should show validation errors for missing shipping information', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    homePage.searchProductByName(testData.products[0].name);
    homePage.selectProductFromResults(testData.products[0].name);
    productPage.selectProductSize(testData.products[0].size);
    productPage.selectProductColor(testData.products[0].color);
    productPage.adjustProductQuantity(2);
    productPage.clickOnAddToCartButton();
    productPage.clickOnShoppingCart();
    cartPage.clickOnProceedToCheckout();
    checkoutPage.clickOnNextButton();
    cy.contains('The shipping method is missing. Select the shipping method and try again.').should('be.visible');
  });

  it('should show error for invalid email', () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    homePage.searchProductByName(testData.products[0].name);
    homePage.selectProductFromResults(testData.products[0].name);
    productPage.selectProductSize(testData.products[0].size);
    productPage.selectProductColor(testData.products[0].color);
    productPage.adjustProductQuantity(2);
    productPage.clickOnAddToCartButton();
    productPage.clickOnShoppingCart();
    cartPage.clickOnProceedToCheckout();
    checkoutPage.fillShippingDetails({
      ...testData.shippingDetails,
      emailAddress: '-a',
    });
    checkoutPage.selectShippingOption(1);
    checkoutPage.clickOnNextButton();
    cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible');
  });
});
