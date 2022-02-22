import { testAuthUser } from '../../fixtures/testAuthUser';

describe('registration', () => {
  // beforeEach(() => cy.visit('/'));
  it('get started', () => {
    cy.visit('/');
    cy.get('#getStartedBtn').click();
  });
  it('auth0 register with random testUser', () => {
    cy.auth0Registration(testAuthUser.email, testAuthUser.password);
  });
  it('auth0 accept 3rd party data (email, username)', () => {
    cy.get('.c295cd12c').click();
  });
  it('logout', () => {
    cy.logout();
  });
});
