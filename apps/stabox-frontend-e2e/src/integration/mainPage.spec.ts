describe('mainpage', () => {
  it('mainpage contains things', () => {
    cy.visit('/');
    cy.get('h1').contains('Lorem Ipsum');
    cy.get('#getStartedBtn').should('contain', 'Get started');
    cy.get('#signUpBtn').should('contain', ' Sign in ');
  });
});
