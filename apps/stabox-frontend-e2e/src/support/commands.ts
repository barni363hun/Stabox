// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    auth0Login(email: string, password: string): void;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    auth0Registration(email: string, password: string): void;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    logout(): void;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('auth0Login', (email: string, password: string) => {
  cy.get('input[type=email]').type(email);
  cy.get('input[type=password]').type(password);
  cy.get('button[type=submit]').click();
});
Cypress.Commands.add('auth0Registration', (email: string, password: string) => {
  cy.get('.auth0-lock-tabs').contains('Sign Up').click();
  cy.get('input[type=email]').type(email);
  cy.get('input[type=password]').type(password);
  cy.get('button[type=submit]').click();
});
Cypress.Commands.add('logout', () => {
  cy.visit('/logout');
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
