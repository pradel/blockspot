describe('City', () => {
  it('Render the city page', () => {
    cy.visit('/city/berlin');
    cy.matchImageSnapshot('city');
  });

  context('mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-6');
    });

    it('Render the city page', () => {
      cy.visit('/city/berlin');
      cy.matchImageSnapshot('city-mobile');
    });
  });
});
