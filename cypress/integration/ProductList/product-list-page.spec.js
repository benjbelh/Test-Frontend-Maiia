context('Product list Page', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('product-list.json').then((productList) => {
      cy.route('GET', 'https://jsonplaceholder.typicode.com/photos', productList).as('Read Product List');
    });
  });

  it('should access to product list', function () {
    cy.visit('/products');
    cy.get('[data-testid=product-1]').as('1st Product').contains('accusamus beatae ad facilis cum similique qui sunt');
    cy.get('[data-testid=product-2]').as('2nd Product').contains('reprehenderit est deserunt velit ipsam');
  });

  it('should access 2nd page to see more products', function () {
    cy.visit('/products');
    cy.get('[data-testid=product-16]').should('not.exist');
    cy.get('[data-testid=product-24]').should('not.exist');
    cy.get('.MuiPagination-ul > :nth-child(3) > .MuiButtonBase-root').click();
    cy.get('[data-testid=product-16]')
      .as('16th Product')
      .contains('iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt');
    cy.get('[data-testid=product-24]').as('24th Product').contains('beatae officiis ut aut');
  });
});
