describe('Home', () => {
  it('Render the home page', () => {
    cy.visit('/');
    cy.matchImageSnapshot('home');
  });

  context('mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    it('Render the home page', () => {
      cy.visit('/');
      cy.matchImageSnapshot('home-mobile');
    });
  });
});
