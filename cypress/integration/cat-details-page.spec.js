context('Cat Details Page', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('cat-list.json').then((productList) => {
      cy.route('GET', 'https://europe-west1-matters-test.cloudfunctions.net/getCats', productList).as('Read Cat List');
    });
  });

  it('should access to first cat details', function () {
    cy.visit('/cats/1');
    cy.contains('Ma Bio.').as('Cat Details Title').should('be.visible');
    cy.contains('Date de naissance: 2015-03-29').as('Cat Details Birthdate').should('be.visible');
  });
});
