class HomePage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/');
  }

  searchProduct(productName) {
    // cy.get('#search').type(productName);
    // cy.get('button[title="Search"]').click();

    // asta sigur se poate rescrie gen
    cy.get('#search').type(`${productName}{enter}`);
  }

  selectProductFromResults(productName) {
    cy.contains('.product-item-info', productName).click();
  }

  navigateToCategory(category) {
    cy.contains('.category-menu', category).click();
  }

  selectFeaturedProduct() {
    cy.get('.featured-product').first().click();
  }
}

export default HomePage;
