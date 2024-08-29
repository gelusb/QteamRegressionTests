import { homePage } from '../../pageFunctions/homePage';
import { productPage } from '../../pageFunctions/productPage';
import { cartPage } from '../../pageFunctions/cartPage';
import testData from '../../fixtures/testData.json';
import { orderConfirmationPage } from '../../pageFunctions/orderConfirmationPage';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
});

describe('Cart Updates and Edge Cases', () => {
   
  it('This case should update quantities and handle cart assertion correctly', () => {

    cy.visit('https://magento.softwaretestingboard.com/');
    homePage.searchProductByName(testData.products[0].name);

    // astea 3 functii s-ar putea ingloba intr-o functie sa fie parametrizata care sa ia un productName, un productSize si productColor
    // Totusi, nu vreau sa faci o functie care apeleaza astea 3 functii. O functie noua curata care face toate 3 actiunile
    homePage.selectProductFromResults(testData.products[0].name);
    productPage.selectProductSize(testData.products[0].size);
    productPage.selectProductColor(testData.products[0].color);

    productPage.clickOnAddToCartButton();
    productPage.clickOnShoppingCart();
    cartPage.updateProductQuantity(testData.products[0].name, 5);
    cartPage.clickOnUpdateShoppingCart();
    //Aici poate ar fi bine sa integrezi pretu produselor in obiectu ala cu produsu, ca pt mine nu are sens de unde 160$ si cum ai aflat ca is 160 (bine stiu ca de pe site)
    // mai degraba fa suma a productPrice[0] + productPrice[1]
    cartPage.assertCartTotalPrice('$160.00');
    cartPage.clickRemoveProductFromBasket(testData.products[0].name);
    // asertu asta oarecum e gresit pt ca tu nu poti ajunge la should be visible daca nu e vizibil, ca tu iei elementu dupa text, schimba selectoru si ia-l cu get
    orderConfirmationPage.assertEmptyCartMessage();
  });
});
