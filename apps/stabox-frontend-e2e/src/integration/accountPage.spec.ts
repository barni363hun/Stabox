import { testAuthUser } from '../fixtures/testAuthUser';

describe('accountPage', () => {
  it('get started', () => {
    cy.visit('/');
    cy.get('#getStartedBtn').click();
  });
  it('auth0 login with testUser', () => {
    cy.auth0Login(testAuthUser.email, testAuthUser.password);
  });
  it('arrive to homepage after redirect', () => {
    cy.get('h1').contains('Lorem Ipsum');
  });
  it('accountpage fill and save user info', () => {
    cy.readFile('./src/helpers/testUser.json').then((oldUser) => {
      cy.visit('/account').then(() => {
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
    });
  });
  it('logout', () => {
    cy.visit('/logout');
  });
});
