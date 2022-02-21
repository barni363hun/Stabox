import { testAuthUser } from '../../fixtures/testAuthUser';

describe('login with test user', () => {
  it('get started', () => {
    cy.visit('/');
    cy.get('#getStartedBtn').click();
  });
  it('auth0 login with testUser', () => {
    cy.auth0Login(testAuthUser.email, testAuthUser.password);
  });
  it('logout', () => {
    cy.visit('/logout');
  });
});
