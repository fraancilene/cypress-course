/// <reference types="cypress" />

// CAMPOS DE SELEÇÃO COM OPÇÕES

describe('Visitando a página de teste - Central de Atendimento ao Cliente TAT', function(){
    beforeEach(function(){
        cy.visit('/src/index.html');
    });

    it('Seleciona um arquivo da pasta fixtures', function(){
        cy.get('input[type="file"]#file-upload')
            .should('not.have.value')
            .selectFile('./cypress/fixtures/example.json')
            .should(function($input){
               expect($input[0].files[0].name).to.equal('example.json');
            })

    });

    it('Seleciona um arquivo simulando um drag-and-drop', function(){
        cy.get('input[type="file"]#file-upload')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json', { action: 'drag-drop' })
            .should(function($input){
                expect($input[0].files[0].name).to.equal('example.json');
            });

    });

    it('Seleciona um arquivo utilizando uma fixture para o qual foi dada um alias', function(){
        cy.fixture('example.json').as('sampleFile');
        cy.get('input[type="file"]#file-upload')
            .selectFile('@sampleFile')
            .should(function($input){
                expect($input[0].files[0].name).to.equal('example.json');
            });


    });
});
