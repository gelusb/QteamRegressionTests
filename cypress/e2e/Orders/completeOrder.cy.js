import HomePage from '../../page_objects/HomePage';
import ProductPage from '../../page_objects/ProductPage';
import CartPage from '../../page_objects/CartPage';
import CheckoutPage from '../../page_objects/CheckoutPage';
import OrderConfirmationPage from '../../page_objects/OrderConfirmationPage';
import testData from '../../fixtures/testData.json';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Complete Order Flow with Multiple Products', () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    const orderConfirmationPage = new OrderConfirmationPage();

  it('should complete an order with multiple products and variations', () => {
    homePage.visit();
    homePage.searchProduct(testData.products[0].name);
    homePage.selectProductFromResults(testData.products[0].name);
    productPage.selectSize(testData.products[0].size);
    productPage.selectColor(testData.products[0].color);
    productPage.adjustQuantity(2);
    productPage.addToCart();
    homePage.searchProduct(testData.products[1].name);
    homePage.selectProductFromResults(testData.products[1].name);
    productPage.selectSize(testData.products[1].size);
    productPage.selectColor(testData.products[1].color);
    productPage.addToCart();
    productPage.goToCart();
    cartPage.checkCartTotal('$163.00');
    cartPage.proceedToCheckout();
    checkoutPage.fillShippingDetails(testData.shippingDetails);
    checkoutPage.selectShipping(0);
    checkoutPage.clickOnNextButton();
    checkoutPage.placeOrder();
    orderConfirmationPage.verifyOrderSuccess();
    orderConfirmationPage.getOrderNumber().then((orderNumber) => {
    cy.log(`Order Number: ${orderNumber}`);
    });
  });
});
