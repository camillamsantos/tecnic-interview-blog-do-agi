import Intercepts from "../e2e/classes/requests/intercepts";
Cypress.Commands.add('login'as any, (username: any, password: any) => {
  function interception() {
    const interception = new Intercepts();
    return interception.loginRoutes();
  };
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.get('#username').type(username);
  cy.get('#password').type(password, { log: false });
  cy.get('').click();
  interception();
});