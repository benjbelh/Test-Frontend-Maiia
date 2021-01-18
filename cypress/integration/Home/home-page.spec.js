context('Home Page', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('product-list.json').then((productList) => {
      cy.route('GET', 'https://jsonplaceholder.typicode.com/photos', productList).as('Read Product List');
    });
  });

  it('should access to product list page from home page', function () {
    cy.visit('/');
    cy.get('[data-testid=product-page-access]').as('Products Page Access Button').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/products`);
  });
});
