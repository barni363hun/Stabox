import { testAuthUser } from '../fixtures/testAuthUser';

describe('accountPageVehicles', () => {
  // it('get started', () => {
  //   cy.visit('/');
  //   cy.get('#getStartedBtn').click();
  // });
  // it('auth0 login with testUser', () => {
  //   cy.auth0Login(testAuthUser.email, testAuthUser.password);
  // });
  // it('arrive to homepage after redirect', () => {
  //   cy.get('h1').contains('Lorem Ipsum');
  // });
  it('accountpage vehicles', () => {
    cy.visit('/account').then(() => {
      cy.get(':nth-child(1) > .bigBtn').click()
      cy.get('#addVehicle').children()
      cy.get('mat-icon').should('have.value', 'add')
    })
    
  });
  // it('logout', () => {
  //   cy.visit('/logout');
  // });
});
