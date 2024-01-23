/// <reference types="cypress"/>

describe('Selector | CLASS', () => {
    it('Validate there is 20 cards displayed', () => {

        cy.visit('https://techglobal-training.com/frontend')
        cy.get('[class="Card_card__-SwHU card"]').should('have.length', 20)

    })
})