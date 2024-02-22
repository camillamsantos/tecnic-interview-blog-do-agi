import Users from "../../classes/users/users";
import Intercepts from "../../classes/requests/intercepts";
import Utilities from "../../classes/utils/utils";
describe('Access to the AGI blog', function () {
  before(function () {
    const visit = cy.visit('/');
    return visit;
  });

  it('Test article search by name and search return found ', function () {

    cy.get('.site-header-above-section-right > .ast-builder-layout-element')
      .should('be.visible')
      .type('Calendário do INSS 2024')
      .type('Cypress.io{enter}')

  });
});