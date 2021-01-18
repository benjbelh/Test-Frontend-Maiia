context('Cart list', () => {
  beforeEach(() => {
    cy.server();
    cy.fixture('product-list.json').then((productList) => {
      cy.route('GET', 'https://jsonplaceholder.typicode.com/photos', productList).as('Read Product List');
    });
  });

  it('should add products to cart list', function () {
    cy.visit('/products');
    cy.get('[data-testid=product-1]').as('1st Product').contains('accusamus beatae ad facilis cum similique qui sunt');
    cy.get('[data-testid=product-1-cart-button]').click();
    cy.get('[data-testid=shopping-cart]').contains('1').as('Product number');
    cy.get('[data-testid=product-3-cart-button]').click();
    cy.get('[data-testid=shopping-cart]').contains('2').as('Product number');
  });

  it('should see products added to cart list', function () {
    cy.visit('/products');

    cy.get('[data-testid=product-1-cart-button]').click();
    cy.get('[data-testid=product-3-cart-button]').click();
    cy.get('[data-testid=shopping-cart]').click();

    cy.get('[data-testid=cart-container] > :nth-child(1)')
      .as('First Cart Item')
      .contains('accusamus beatae ad facilis cum similique qui sunt');
    cy.get('[data-testid=cart-container] > :nth-child(2)')
      .as('Second Cart Item')
      .contains('officia porro iure quia iusto qui ipsa ut modi');
  });

  it('should increase quantity from product added to cart list', function () {
    cy.visit('/products');

    cy.get('[data-testid=product-1-cart-button]').click();
    cy.get('[data-testid=shopping-cart]').click();

    cy.get('[data-testid=cart-container] > :nth-child(1)').contains('Quantity: 1');
    cy.get('[data-testid=increase-quantity-button]').click();
    cy.get('[data-testid=cart-container] > :nth-child(1)').contains('Quantity: 2');
  });

  it('should decrease quantity while > 1 from product added to cart list', function () {
    cy.visit('/products');

    cy.get('[data-testid=product-1-cart-button]').click();
    cy.get('[data-testid=shopping-cart]').click();
    cy.get('[data-testid=increase-quantity-button]').click();
    cy.get('[data-testid=cart-container] > :nth-child(1)').contains('Quantity: 2');

    cy.get('[data-testid=decrease-quantity-button]').click();
    cy.get('[data-testid=cart-container] > :nth-child(1)').contains('Quantity: 1');

    cy.get('[data-testid=decrease-quantity-button]').click();
    cy.get('[data-testid=cart-container] > :nth-child(1)').contains('Quantity: 1');
  });

  it('should remove product from cart list ', function () {
    cy.visit('/products');

    cy.get('[data-testid=product-1-cart-button]').click();
    cy.get('[data-testid=shopping-cart]').click();

    cy.get('[data-testid=remove-from-cart-button]').click();

    cy.get('[data-testid=empty-cart-message]').contains('Add products to cart');
  });
});
