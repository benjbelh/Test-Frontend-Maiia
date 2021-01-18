context('Product list Page', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('cat-list.json').then((productList) => {
      cy.route('GET', 'https://europe-west1-matters-test.cloudfunctions.net/getCats', productList).as('Read Cat List');
    });
  });

  it('should access to cat list page from home page', function () {
    cy.visit('/');
    cy.get('[data-testid=cats-page-access]').as('Cat Page Access Button').click();
    cy.url().should('eq', `${Cypress.config().baseUrl}/cats`);
  });
});
