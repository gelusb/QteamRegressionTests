import HomePage from '../../page_objects/HomePage';
import ProductPage from '../../page_objects/ProductPage';
import CartPage from '../../page_objects/CartPage';
import testData from '../../fixtures/testData.json';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Cart Updates and Edge Cases', () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();

  it('This case should update quantities and handle cart assertion correctly', () => {
    homePage.visit();
    homePage.searchProduct(testData.products[0].name);
    homePage.selectProductFromResults(testData.products[0].name);
    productPage.selectSize(testData.products[0].size);
    productPage.selectColor(testData.products[0].color);
    productPage.addToCart();
    productPage.goToCart();
    cartPage.updateQuantity(testData.products[0].name, 5);
    cartPage.clickOnUpdateShoppingCart();
    cartPage.checkCartTotal('$160.00');
    cartPage.removeProduct(testData.products[0].name);
    cy.contains('You have no items in your shopping cart.').should('be.visible');
  });
});
