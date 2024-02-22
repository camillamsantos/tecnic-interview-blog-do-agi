import Iintercepts from "../../interfaces/requests/intercepts.interface";
class Intercepts implements Iintercepts {
  intercept(interception: any): any {
    return interception.response;
  };
  initialRoute(): any {
    cy.intercept('').as('microFrontEnd');
    cy.wait('@microFrontEnd', { requestTimeout: 60000 }).then((interception) => {
      this.intercept(interception);
      });
  };
  loginRoutes(): any {
    cy.intercept('').as('microFrontEnd');
    cy.intercept('').as('authentication');
    cy.intercept('').as('block');
    cy.wait('@microFrontEnd', { requestTimeout: 60000 }).then((interception) => {
        this.intercept(interception);
      });
    cy.wait('@authentication', { requestTimeout: 60000 }).then((interception) => {
        this.intercept(interception);
      });
    cy.wait('@block', { requestTimeout: 60000 }).then((interception) => {
      this.intercept(interception);
    });
  };
};
export default Intercepts;
