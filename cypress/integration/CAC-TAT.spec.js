/// <reference types="cypress" />



describe('Visitando a página de teste - Central de Atendimento ao Cliente TAT', function(){
    beforeEach(function(){
        cy.visit('/src/index.html');
    });

    it('verifica o titulo da aplicação', function() { 
        // verificação (um teste sempre tem que ter ações e verificações)
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT'); // buscando o titulo da página
    });

    // .only - para executar apenas esse teste
    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('#firstName').type('Francilene');
        cy.get('#lastName').type('Silva');
        cy.get('#email').type('fran@gmail.com');
        cy.get('#open-text-area').type('Teste');
        cy.get('button[type="submit"]').click();

        // verificação
        cy.get('.success').should('be.visible');

    });

    // .only - para executar apenas esse teste
    it('preenche os campos obrigatórios e envia o formulário com delay', function() {
        const longText = ' desenvolvimento de software é o processo de conceção, especificação, design, programação'
        cy.get('#firstName').type('Francilene');
        cy.get('#lastName').type('Silva');
        cy.get('#email').type('fran@gmail.com');
        cy.get('#open-text-area').type(longText, {delay: 0}); // utilizando o delay (usar quando for escrever um texto longo)
        cy.get('button[type="submit"]').click();

        // verificação
        cy.get('.success').should('be.visible');
    });

    it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Francilene');
        cy.get('#lastName').type('Silva');
        cy.get('#email').type('fran.gmail.com');
        cy.get('#open-text-area').type('Teste'); // utilizando o delay (usar quando for escrever um texto longo)
        cy.get('button[type="submit"]').click();

        // verificação
        cy.get('.error').should('be.visible');
    });

    // validando se o campo de telefone está recebendo um valor númerico ou não
    it('Campo telefone continua vazio quando preenchido com valor não númerico', function() {
        cy.get('#phone')
            .type('abcdefghij')
            .should('have.value', ''); // verificação
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


    it('Preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName')
            .type('Francilene')
            .should('have.value', 'Francilene')
            .clear()
            .should('have.value', '');

        cy.get('#lastName')
            .type('Silva')
            .should('have.value', 'Silva')
            .clear()
            .should('have.value', '');

        cy.get('#email')
            .type('fran@gmail.com')
            .should('have.value', 'fran@gmail.com')
            .clear().should('have.value', '');

        cy.get('#phone')
            .type(1234567890)
            .should('have.value', 123456789)
            .clear()
            .should('have.value', '')
    });

    it.only('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]').click();
        // verificação
        cy.get('.error').should('be.visible');
    });

});
