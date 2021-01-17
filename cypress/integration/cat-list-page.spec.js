context('Cat list Page', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('cat-list.json').then((productList) => {
      cy.route('GET', 'https://europe-west1-matters-test.cloudfunctions.net/getCats', productList).as('Read Cat List');
    });
  });

  it('should access to cat list', function () {
    cy.visit('/cats');
    cy.get('[data-testid=cat-1]').as('1st Cat').contains('Robi');
    cy.get('[data-testid=cat-2]').as('1st Cat').contains('Marseille refuge - 13');
  });
});
