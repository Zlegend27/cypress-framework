/// <reference types="cypress"/>

describe('Exists', () => {

    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/html-elements')
    })

    it('Exists', () => {
        cy.get('.mt-1').should('not.exist')
        cy.get('#register_button').click()

        cy.get('.mt-1')
        .should('be.visible')
        .and('have.text', 'You clicked on “Register”')
    })

    it('Actions | Type Dates', () => {
        cy.get('#date_input1').should('be.visible').and('have.attr', 'placeholder', 'mm/dd/yyyy')
        .should('have.value', '')
        .type('10/10/2000{enter}')
        .should('have.value', '10/10/2000')
    })
})