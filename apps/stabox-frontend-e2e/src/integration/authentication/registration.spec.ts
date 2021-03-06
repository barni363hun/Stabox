describe('registration', () => {
  // beforeEach(() => cy.visit('/'));
  it('get started', () => {
    cy.getStarted();
  });
  it('auth0 register with random data', () => {
    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    const testname = `testname${id}`;
    cy.auth0Registration(testname + '@cypresstest.com', 'Abc123456');
  });
  it('auth0 accept 3rd party data (email, username)', () => {
    cy.get('button[value=accept]').click();
  });
  it('logout', () => {
    cy.logout();
  });
});
