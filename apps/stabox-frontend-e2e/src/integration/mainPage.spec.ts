describe('mainpage', () => {
  it('mainpage contains things', () => {
    cy.visit('/');
    cy.get('h1').contains('Lorem Ipsum');
    cy.get('#landingCardDesc > p').contains('Lorem ipsum');
    cy.get('.joinNow').contains('Join Now');
  });
});
