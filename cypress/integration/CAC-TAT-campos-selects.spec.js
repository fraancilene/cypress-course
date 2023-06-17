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

    // INPUTS DO TIPO RADIO - .check()

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

    // MARCANDO E DESMARCANDO INPUTS DO TIPO CHECKBOX
    it('Marca ambos checkboxes, depois desmarca o último', function(){

        cy.get('input[type="checkbox"]') // pegando todos os checkbox
            .check() // marcando ambos os checkboxes encontrados
            .should('be.checked') // verificando se estão marcados
            .last() // pegando o último checkbox
            .uncheck() // desmarcando o último
            .should('not.be.checked');
    });

    it('Exibe mensagem de erro aquando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Francilene');
        cy.get('#lastName').type('Silva');
        cy.get('#email').type('fran.gmail.com');
        cy.get('#phone-checkbox').check();
        cy.get('#open-text-area').type('Teste'); // utilizando o delay (usar quando for escrever um texto longo)
        cy.get('button[type="submit"]').click();

        // verificação
        cy.get('.error').should('be.visible');
    });



});
