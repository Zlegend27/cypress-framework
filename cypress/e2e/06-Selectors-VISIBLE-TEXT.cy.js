/// <reference types="cypress"/>

describe('Selector | VISIBLE TEXT', () => {
    it('Validate frontend cards', () => {

        cy.visit('https://techglobal-training.com/frontend')
        cy.contains('Waits')
        cy.contains('Tables')
        cy.contains('Project')
        cy.contains('Elements')
        cy.contains('Actions')
    })
})