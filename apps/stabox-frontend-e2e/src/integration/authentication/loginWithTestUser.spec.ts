import { testUser } from '../../fixtures/testUser';

describe('login with test user', () => {
  it('get started', () => {
    cy.visit('/');
    cy.get('#getStartedBtn').click();
  });
  it('auth0 login with testUser', () => {
    cy.auth0Login(testUser.email, testUser.password);
  });
  it('logout', () => {
    cy.visit('/logout');
  });
});
