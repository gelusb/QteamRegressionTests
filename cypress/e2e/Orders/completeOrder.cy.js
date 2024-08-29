import { homePage } from '../../pages/homePage';
import { productPage } from '../../pages/productPage';
import { cartPage } from '../../pages/cartPage';
import { checkoutPage } from '../../pages/checkoutPage';
import { orderConfirmationPage } from '../../pages/orderConfirmationPage';
import testData from '../../fixtures/testData.json';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Complete Order Flow with Multiple Products', () => {

  it('should complete an order with multiple products and variations', () => {

    cy.visit('https://magento.softwaretestingboard.com/');
    homePage.searchProductByName(testData.products[0].name);
    homePage.selectProductFromResults(testData.products[0].name);
    productPage.selectProductSize(testData.products[0].size);
    productPage.selectProductColor(testData.products[0].color);
    productPage.adjustProductQuantity(2);
    productPage.clickOnAddToCartButton();
    homePage.searchProductByName(testData.products[1].name);
    homePage.selectProductFromResults(testData.products[1].name);
    productPage.selectProductSize(testData.products[1].size);
    productPage.selectProductColor(testData.products[1].color);
    productPage.clickOnAddToCartButton();
    productPage.clickOnShoppingCart();
    cartPage.assertCartTotalPrice('$163.00');
    cartPage.clickOnProceedToCheckout();
    checkoutPage.fillShippingDetails(testData.shippingDetails);
    checkoutPage.selectShippingOption(0);
    checkoutPage.clickOnNextButton();
    checkoutPage.clickPlaceOrderButton();
    orderConfirmationPage.assertOrderSuccess();
    orderConfirmationPage.getOrderNumber().then((orderNumber) => {
    cy.log(`Order Number: ${orderNumber}`);
    });
  });
});
