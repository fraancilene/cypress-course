/// <reference types="cypress" />

// COMANDOS CUSTOMIZADOS - na pasta support/commands.js (pode criar quantos arquivos de comandos vc quiser, lembrando de importá-los)

describe('Visitando a página de teste - Central de Atendimento ao Cliente TAT', function(){
    beforeEach(function(){
        cy.visit('/src/index.html');
    });

    it('envia o formulário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit();
        // verificação
        cy.get('.success').should('be.visible');
    });

    // outra forma de identificar elementos (outro comando - cy.contains)




});
