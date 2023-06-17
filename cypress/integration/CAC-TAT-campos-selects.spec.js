/// <reference types="cypress" />

// CAMPOS DE SELEÇÃO COM OPÇÕES

describe('Visitando a página de teste - Central de Atendimento ao Cliente TAT', function(){
    beforeEach(function(){
        cy.visit('/src/index.html');
    });

    it('Seleciona um produto YouTube por seu texto', function(){
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube');
    });

    it('Seleciona um produto Mentoria por seu valor (value)', function(){
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria');
    });

    it('Seleciona um produto Blog por seu índice', function(){
        cy.get('#product')
            .select(1)
            .should('have.value', 'blog');
    });

    // INPUTS DO TIPO RADIO E CHECKBOX - .check()

    it('Marca o tipo de atendimento "Feedback"', function(){
        cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value', 'feedback');
    });

    it('Marca o tipo de atendimento', function(){

        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio){ // verificando se os radios foram selecionados
                cy.wrap($radio).check();
                cy.wrap($radio).should('be.checked');
            });
    });


});
