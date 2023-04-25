/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', ()=> {

    beforeEach(() => cy.visit('./cypress-basico-v2/src/index.html'));

    it('verifica o título da aplicação', ()=> {
           cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
     });
     it('preenche os campos obrigatórios e envia o formulário', () => {
       const longText = 'teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste  teste'
       cy.get('#firstName')
              .type('Gaspar ')
       cy.get('#lastName')
              .type('Gaspar ', )
       cy.get('input[type="email"]')
              .type('teste@teste.com')
       cy.get('input[type="number"]')
              .type('123445677')
       cy.get('#open-text-area')
              .type(longText,{delay:0})
       cy.get('button[type="submit"]').click()

       cy.get('.success').should('be.visible')

     });
     it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
       cy.get('#firstName').type('Gaspar ')
       cy.get('#lastName').type('Gaspar ', )
       cy.get('input[type="email"]').type('testeteste.com')
       cy.get('input[type="number"]').type('123445677')
       cy.get('#open-text-area').type('teste')
       cy.get('button[type="submit"]').click()
       cy.get('.error').should('be.visible')
     });
     it('campo telefone contia vazio quando preenchido com valor não numerico', () => {
       cy.get('input[type="number"]')
         .type('asdadasdadad')
         .should('have.value', '')
     });

     it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
       cy.get('#firstName').type('Gaspar ')
       cy.get('#lastName').type('Gaspar ', )
       cy.get('input[type="email"]').type('testeteste.com')
       cy.get('#phone-checkbox').check()
       cy.get('#open-text-area').type('teste')
       cy.get('button[type="submit"]').click()
       cy.get('.error').should('be.visible')
       
     });
     it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
       cy.get('#firstName').type('Gustavo').should('have.value', 'Gustavo').clear().should('have.value', '')
       cy.get('#lastName').type('Gaspar', ).should('have.value', 'Gaspar').clear().should('have.value', '')
       cy.get('input[type="email"]').type('testeteste.com').should('have.value', 'testeteste.com').clear().should('have.value', '')
       cy.get('input[type="number"]').type('123445677').should('have.value', '123445677').clear().should('have.value', '')
       cy.get('#phone-checkbox').check()
       cy.get('#open-text-area').type('teste').should('have.value', 'teste').clear().should('have.value', '')
       cy.get('button[type="submit"]').click()
       cy.get('.error').should('be.visible')
     });
     it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
       cy.get('button[type="submit"]').click()
       cy.get('.error').should('be.visible')
     });

     it('envia o formuário com sucesso usando um comando customizado', () => {
       cy.preencheOsCampoEenvia()
       cy.get('.success').should('be.visible')
     });
     it('seleciona um produto (YouTube) por seu texto', () => {
       cy.selecionaElementoDentroDoSelectTexto()
       cy.get('select').should('have.value', 'youtube')
     });
     it('seleciona um produto (Mentoria) por seu valor (value)', () => {
       cy.selecionaElementoDentroDoSelectValor()
       cy.get('select').should('have.value', 'mentoria')
     });
     it('seleciona um produto (Blog) por seu índice', () => {
       cy.selecionaElementoDentroDoSelectIndice()
       cy.get('select').should('have.value', 'blog')
     });

     it('marca o tipo de atendimento "Feedback"', () => {
      cy.clicaNoElementoTipoRadio()
        .should('have.value', 'feedback')
     });
     it('marca cada tipo de atendimento', () => {
         cy.marcaCadaRadio()
     });

     it('marca ambos checkboxes, depois desmarca o último', () => {
      cy.masrcaEdesmarcaOsCamposCheckBox()
     });

     it('seleciona um arquivo da pasta fixtures', () => {
      cy.selecionaArquivo()
        });
      
     it('seleciona um arquivo simulando um drag-and-drop', () => {
      cy.dragAndDrop()
     });
     
     it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
         cy.fixture('example.json').as('sampleFile')
         cy.get('input[type="file"]')
            .selectFile('@sampleFile')
            .should(($input)=>{
              expect($input[0].files[0].name).to.equal('example.json')
      })

      
     });

     it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
         cy.verificaLink()
     });

     it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
      cy.abreJanelaSemPrecisarClicar()
     });
 

  })//fecha describe
