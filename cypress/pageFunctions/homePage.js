import { homePageSelectors } from "../pageSelectors/homePageSelectors";

export class HomePage {

  searchProductByName(productName) {
    cy.get(homePageSelectors.searchInput).type(`${productName}{enter}`);
  }

  selectProductFromResults(productName) {
    cy.contains(homePageSelectors.productInformation, productName).click();
  }

}

export const homePage = new HomePage();
