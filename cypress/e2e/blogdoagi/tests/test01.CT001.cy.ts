describe('Access to the AGI blog', function () {
  before(function () {
    const visit = cy.visit('/');
    return visit;
  });

  it('Test article search by name and search return not found ', function () {

    cy.get('.site-header-above-section-right > .ast-builder-layout-element')
      .should('be.visible')
      .type('Saque aniversário do FGTS 2025')
      .type("{enter}")
      .wait(3000)

      cy.get('.page-content > p')
      .invoke('text')
      .should('match', /^Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras/)

  });
});