import { testAuthUser } from '../fixtures/testAuthUser';

describe('accountPageUserInfo', () => {
  it('login', () => {
    cy.getStarted();
    cy.auth0Login(testAuthUser.email, testAuthUser.password);
  });
  it('accountpage fill and save user info', () => {
    cy.wait(3000);
    cy.readFile('./src/helpers/testUser.json').then((oldUser) => {
      const uuid = () => Cypress._.random(1e4, 1e5);
      const newUser = {
        userName: 'test' + uuid(),
        firstName: 'FN' + uuid(),
        lastName: 'LN' + uuid(),
        phoneNumber: '+362027' + uuid(),
      };
      cy.log(oldUser.userName);
      cy.log(newUser.userName);
      cy.get('#username')
        .should('have.attr', 'ng-reflect-model', oldUser.userName)
        .clear()
        .type(newUser.userName);
      cy.get('#lastName')
        .should('have.attr', 'ng-reflect-model', oldUser.lastName)
        .clear()
        .type(newUser.lastName);
      cy.get('#firstName')
        .should('have.attr', 'ng-reflect-model', oldUser.firstName)
        .clear()
        .type(newUser.firstName);
      cy.get('#tel')
        .should('have.attr', 'ng-reflect-model', oldUser.phoneNumber)
        .clear()
        .type(newUser.phoneNumber);
      cy.writeFile('./src/helpers/testUser.json', newUser);
      cy.get('.saveButton').click();
    });
    cy.wait(2000);
  });
  it('logout', () => {
    cy.visit('/logout');
  });
});
