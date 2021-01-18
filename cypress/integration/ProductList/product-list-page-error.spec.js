context('Product list Page - ERROR', () => {
  it('should notify users while product list fetch return error', function () {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/photos',
      status: 404,
      response: {},
    }).as('Read Product List Error');
    cy.visit('/products');
    cy.get('.Toastify').contains('Request failed with status code 404').should('be.visible');
  });
});
