context('Cat Appointment Plan', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('cat-list.json').then((productList) => {
      cy.route('GET', 'https://europe-west1-matters-test.cloudfunctions.net/getCats', productList).as('Read Cat List');
    });
  });

  it('should plan appointment successfully', function () {
    cy.route({
      method: 'POST',
      url: 'https://europe-west1-matters-test.cloudfunctions.net/getAdoptionAppointment',
      status: 200,
      response: { appointment: '2020-12-19T18:38:35.761Z' },
    }).as('Plan New Appointment');
    cy.visit('/cats/1');
    cy.get('[data-testid=cat-adoption-request-btn]').click();
    cy.contains('Demande de Rendez Vous').as('Appointment Confirmation Title').should('be.visible');
  });

  it('should display error while catID is not valid', function () {
    cy.route({
      method: 'POST',
      url: 'https://europe-west1-matters-test.cloudfunctions.net/getAdoptionAppointment',
      status: 403,
      response: {
        error: 'You must provide a valid catId (number)',
      },
    }).as('Plan New Appointment');
    cy.visit('/cats/1');
    cy.get('[data-testid=cat-adoption-request-btn]').click();
    cy.get('.Toastify').contains('You must provide a valid catId (number)').should('be.visible');
  });
});
