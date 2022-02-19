import { testUser } from '../fixtures/testUser';

describe('accountPage', () => {
  it('get started', () => {
    cy.visit('/');
    cy.get('#getStartedBtn').click();
  });
  it('auth0 login with testUser', () => {
    cy.auth0Login(testUser.email, testUser.password);
  });
  it('arrive to homepage after redirect', () => {
    cy.get('h1').contains('Lorem Ipsum');
    // cy.get('#getStartedBtn').contains('Stabox WebApp').click();
    // cy.get('.navbar-toggler-icon').click();
    // cy.get(
    //   '#sideBar > [routerlink="/account"] > .sideBarItem > app-account-button > [ng-reflect-ng-class="[object Object]"] > .outline > .accountBtn'
    // ).click();
  });
  it('accountpage fill and save user info', () => {
    cy.visit('/account').then(() => {
      cy.get('#username').clear().type('testJohnDoe');
      cy.get('#firstName').clear().type('John');
      cy.get('#lastName').clear().type('Doe');
      cy.get('#tel').clear().type('+36202790962');
      cy.get('.saveButton').click();
    });
    //cy.get('#username').type('testJohnDoe');
    // cy.get('.row > :nth-child(1) > .ng-untouched').clear().type('John');
    // cy.get(':nth-child(2) > .ng-untouched').clear().type('Doe');
    // cy.get(':nth-child(4) > .ng-untouched').clear().type('+36202790962');
    //cy.get('.saveButton').click();
  });
  it('logout', () => {
    cy.visit('/logout');
  });
});
