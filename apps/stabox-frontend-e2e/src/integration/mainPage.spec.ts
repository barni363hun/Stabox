describe('mainpage', () => {
  it('mainpage contains things', () => {
    cy.visit('/');
    cy.get('h1').contains('Stabox');
    cy.get('.joinNow').contains('Join Now');
  });
});
