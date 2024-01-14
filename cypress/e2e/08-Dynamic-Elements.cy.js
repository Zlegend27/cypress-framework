/// <reference types="cypress"/>

// TEST CASE:
// Go to https://techglobal-training.com/frontend
// Click on Dynamic Elements card
// Validate that there are 2 boxes paragraphs boxes with "Box 1" and "Box 2" texts

/*
    tag[attribute="value"]     --> equals
    tag[attribute*="value"]     --> contains
    tag[attribute^="value"]     --> starts-with
    tag[attribute$="value"]     --> ends-with
*/

describe('Dynamic Elements | CSS contains, starts-with ends-with', () => {

    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend')
    })

    it('Validate TechGlobal Dynamic Elements 1', () => {

        cy.get('#card-2').click()
        cy.get('p[id^="box_1"]').should('be.visible').and('have.text', 'Box 1')
        cy.get('p[id^="box_2"]').should('be.visible').and('have.text', 'Box 2')
    })

})