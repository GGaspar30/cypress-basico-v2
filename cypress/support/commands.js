
Cypress.Commands.add('preencheOsCampoEenvia', ()=>{
    cy.get('#firstName').type('Gustavo')
    cy.get('#lastName').type('Gaspar', )
    cy.get('input[type="email"]').type('teste@teste.com')
    cy.get('#phone-checkbox').check()
    cy.get('input[type="number"]').type('123445677')
    cy.get('#open-text-area').type('teste')
    cy.contains('button','Enviar' ).click()
    
})

Cypress.Commands.add('selecionaElementoDentroDoSelectTexto', ()=>{
    cy.get('select').select('YouTube')
})
Cypress.Commands.add('selecionaElementoDentroDoSelectValor', ()=>{
    cy.get('select').select('mentoria')
})
Cypress.Commands.add('selecionaElementoDentroDoSelectIndice', ()=>{
    cy.get('select').select(1)
})
Cypress.Commands.add('clicaNoElementoTipoRadio', ()=>{
    cy.get('input[type="radio"]').check('feedback')
   // cy.get('input[type="radio"][value="feedback"]').check()
})
Cypress.Commands.add('marcaCadaRadio', ()=>{
    cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(($radio)=>{  
            cy.wrap($radio).check().should('be.checked')
         })
})
Cypress.Commands.add('masrcaEdesmarcaOsCamposCheckBox', ()=>{
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
})

Cypress.Commands.add('selecionaArquivo', ()=>{
    cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json')
        .should(($input)=>{
            expect($input[0].files[0].name).to.equal('example.json')
    })

})

Cypress.Commands.add('dragAndDrop', ()=>{
    cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
    .should(($input)=>{
        expect($input[0].files[0].name).to.equal('example.json')})

})
Cypress.Commands.add('verificaLink', ()=>{
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
})
Cypress.Commands.add('abreJanelaSemPrecisarClicar', ()=>{
    cy.get('#privacy a').invoke('removeAttr', 'target').click()
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT - Política de privacidade')
})


