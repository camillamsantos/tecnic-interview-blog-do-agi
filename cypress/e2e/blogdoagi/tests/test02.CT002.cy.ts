describe('Access to the AGI blog', function () {
  before(function () {
    const visit = cy.visit('/');
    return visit;
  });

  it('Test article search by name and search return found ', function () {

    cy.get('.site-header-above-section-right > .ast-builder-layout-element')
      .should('be.visible')
      .type('Calendário do INSS 2024')
      .type("{enter}")
      .wait(3000)

    cy.get('.last')
      .invoke('text')
      .should('match', /^Results for/)

  });
});