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

    //visitu asta nu trebuia sa aiba functie, ori faci in before each cy.visit(urlu direct) sau faci aici cy.visit direct in test
    homePage.visit();
    // functia asta de search product e ok
    homePage.searchProduct(testData.products[0].name);

    // astea 3 functii s-ar putea ingloba intr-o functie sa fie parametrizata care sa ia un productName, un productSize si productColor
    // Totusi, nu vreau sa faci o functie care apeleaza astea 3 functii. O functie noua curata care face toate 3 actiunile
    homePage.selectProductFromResults(testData.products[0].name);
    productPage.selectSize(testData.products[0].size);
    productPage.selectColor(testData.products[0].color);

    productPage.addToCart();
    productPage.goToCart();
    cartPage.updateQuantity(testData.products[0].name, 5);
    cartPage.clickOnUpdateShoppingCart();
    //Aici poate ar fi bine sa integrezi pretu produselor in obiectu ala cu produsu, ca pt mine nu are sens de unde 160$ si cum ai aflat ca is 160 (bine stiu ca de pe site)
    // mai degraba fa suma a productPrice[0] + productPrice[1]
    cartPage.checkCartTotal('$160.00');
    cartPage.removeProduct(testData.products[0].name);
    // asertu asta oarecum e gresit pt ca tu nu poti ajunge la should be visible daca nu e vizibil, ca tu iei elementu dupa text, schimba selectoru si ia-l cu get
    cy.contains('You have no items in your shopping cart.').should('be.visible');
  });
});
