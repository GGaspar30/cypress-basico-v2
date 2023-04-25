/// <reference types="Cypress" />

it('testa a página da política de privacidade de forma independente', () => {
    cy.visit('./cypress-basico-v2/src/privacy.html')
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
});