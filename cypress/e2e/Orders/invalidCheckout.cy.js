import HomePage from '../../page_objects/HomePage';
import ProductPage from '../../page_objects/ProductPage';
import CartPage from '../../page_objects/CartPage';
import CheckoutPage from '../../page_objects/CheckoutPage';
import testData from '../../fixtures/testData.json';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Invalid Checkout Scenarios', () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();

  it('should show validation errors for missing shipping information', () => {
    homePage.visit();
    homePage.searchProduct(testData.products[0].name);
    homePage.selectProductFromResults(testData.products[0].name);
    productPage.selectSize(testData.products[0].size);
    productPage.selectColor(testData.products[0].color);
    productPage.adjustQuantity(2);
    productPage.addToCart();
    productPage.goToCart();
    cartPage.proceedToCheckout();
    checkoutPage.clickOnNextButton();
    cy.contains('The shipping method is missing. Select the shipping method and try again.').should('be.visible');
  });

  it('should show error for invalid email', () => {
    homePage.visit();
    homePage.searchProduct(testData.products[0].name);
    homePage.selectProductFromResults(testData.products[0].name);
    productPage.selectSize(testData.products[0].size);
    productPage.selectColor(testData.products[0].color);
    productPage.adjustQuantity(2);
    productPage.addToCart();
    productPage.goToCart();
    cartPage.proceedToCheckout();
    checkoutPage.fillShippingDetails({
      ...testData.shippingDetails,
      emailAddress: '-a',
    });
    checkoutPage.selectShipping(1);
    checkoutPage.clickOnNextButton();
    cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible');
  });
});
