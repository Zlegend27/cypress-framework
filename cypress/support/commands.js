// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

    Cypress.Commands.add("clickCard", (link) => {
        cy.get(".cards").contains(link).click();
    })

    Cypress.Commands.add('selectDropdownOption', ($el, value) => {
        cy.get($el).select(value)
    })

    Cypress.Commands.add('login', (username, password) => {
        cy.get('#text_input1').type(username)
        cy.get('#text_input2').type(password)
    })
    
    Cypress.Commands.add('haveText', ($el, value) => {
        cy.get($el).should('have.text', value)
    })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

    Cypress.Commands.add('haveText2', { prevSubject: true }, (subject, $el, value) => {
        cy.get($el).should('have.text', value)
    })

    // Create the function that will log the text of the web element
    Cypress.Commands.add('logText', { prevSubject: true }, (subject, arg1, arg2) => {
        const text = subject.text()

        cy.log(`My text is: ${text}`)

        return cy.wrap(subject)
    })

    Cypress.Commands.add('haveText', {prevSubject: true }, (subject, value) => {
        cy.wrap(subject).should('have.text', value)
    })

    Cypress.Commands.add('assertAttribute', { prevSubject: true }, (subject, attr, value) => {
        cy.wrap(subject).should('have.attr', attr, value)
    })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })