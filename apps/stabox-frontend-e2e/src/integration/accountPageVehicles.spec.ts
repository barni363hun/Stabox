import { testAuthUser } from '../fixtures/testAuthUser';

describe('accountPageVehicles', () => {
  it('login', () => {
    cy.getStarted();
    cy.auth0Login(testAuthUser.email, testAuthUser.password);
  });
  it('accountpage vehicles', () => {
    cy.get(':nth-child(1) > .bigBtn').click();
    // TODO IDK why is this happening maybe wait for the response
    cy.wait(2000);
    cy.get('#addVehicle').children().click();
    cy.get(':nth-child(1) > .col-xl-10 > .ng-untouched')
      .clear()
      .type('testVehicle');
    cy.get('#addVehicle').children().click();
    cy.get(':nth-child(2) > .col-xl-10 > .ng-untouched')
      .clear()
      .type('wrongTestVehicle');
    cy.get('.vehicleIcon').click();
    cy.get('#closeIcon').click();
    cy.get(':nth-child(1) > .bigBtn').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .my-auto > .mat-icon').click();
    cy.wait(2000);
  });
  it('logout', () => {
    cy.visit('/logout');
  });
});
