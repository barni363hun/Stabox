import { testAuthUser } from '../../fixtures/testAuthUser';

describe('registration', () => {
  // beforeEach(() => cy.visit('/'));
  it('registration', () => {
    cy.getStarted();
    cy.auth0Registration(testAuthUser.email, testAuthUser.password);
    cy.get('.c295cd12c').click();
  });
  it('logout', () => {
    cy.logout();
  });
});
