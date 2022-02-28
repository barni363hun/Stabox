import { testAuthUser } from '../../fixtures/testAuthUser';

describe('login', () => {
  it('get started', () => {
    cy.getStarted();
  });
  it('auth0 login with testUser', () => {
    cy.auth0Login(testAuthUser.email, testAuthUser.password);
  });
  it('logout', () => {
    cy.visit('/logout');
  });
});
