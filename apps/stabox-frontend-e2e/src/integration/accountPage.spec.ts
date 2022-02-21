import { testUser } from '../fixtures/testUser';

describe('accountPage', () => {
  // it('get started', () => {
  //   cy.visit('/');
  //   cy.get('#getStartedBtn').click();
  // });
  // it('auth0 login with testUser', () => {
  //   cy.auth0Login(testUser.email, testUser.password);
  // });
  // it('arrive to homepage after redirect', () => {
  //   cy.get('h1').contains('Lorem Ipsum');
  //   // cy.get('#getStartedBtn').contains('Stabox WebApp').click();
  //   // cy.get('.navbar-toggler-icon').click();
  //   // cy.get(
  //   //   '#sideBar > [routerlink="/account"] > .sideBarItem > app-account-button > [ng-reflect-ng-class="[object Object]"] > .outline > .accountBtn'
  //   // ).click();
  // });
  it('accountpage fill and save user info', () => {
    const phone = () => Cypress._.random(0, 1e9);
    const tel = "+"+phone()+"00";
    cy.visit('/account').then(() => {
      // cy.get('#username').should('have.ng-reflect-model', '/^(?!\\s*$).+/').clear().type('testJohnDoe'); 
      cy.get('#tel').should('have.value', '/.*00.*/i').clear().type(tel);
      cy.get('#lastName').clear().type('Doe');
      cy.get('#firstName').clear().type('John');
      cy.get('#username').clear().type('testJohnDoe');
      cy.get('.saveButton').click();
    });
    //cy.get('#username').type('testJohnDoe');
    // cy.get('.row > :nth-child(1) > .ng-untouched').clear().type('John');
    // cy.get(':nth-child(2) > .ng-untouched').clear().type('Doe');
    // cy.get(':nth-child(4) > .ng-untouched').clear().type('+36202790962');
    //cy.get('.saveButton').click();
  });

  // it('examine changes', () => {
  //   cy.visit('/account').then(() => {
  //     cy.get('#username').should('have.value', 'testJohnDoe');
  //     cy.get('#firstName').should('have.value', 'John');
  //     cy.get('#lastName').should('have.value', 'Doe');
  //     cy.get('#tel').should('have.value', '+36202790962');
  //   });
  // });
  // it('logout', () => {
  //   cy.visit('/logout');
  // });
});
