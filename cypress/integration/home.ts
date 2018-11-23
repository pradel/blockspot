const url = 'http://blockspot:3000';

describe('Home', () => {
  it('Render the home page', () => {
    cy.visit(url);
    cy.matchImageSnapshot('home');
  });

  context('mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    it('Render the home page', () => {
      cy.visit(url);
      cy.matchImageSnapshot('home-mobile');
    });
  });
});
