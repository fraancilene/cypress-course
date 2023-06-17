// adicionando um novo comando
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Francilene');
    cy.get('#lastName').type('Silva');
    cy.get('#email').type('fran@gmail.com');
    cy.get('#open-text-area').type('Teste');
    cy.get('button[type="submit"]').click();
});