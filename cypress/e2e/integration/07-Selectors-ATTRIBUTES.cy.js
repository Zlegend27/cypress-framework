/// <reference types="cypress"/>

describe('Selector | ATTRIBUTES', () => {

    // runs once before the suite
    before(() => {
        cy.log('Execution of selector | Attributes started')
    })

    // runs once after the suite
    after(() => {
        cy.log('Execution of selector | Attributes ended')
    })

    // Before Each of the test below execute this block first 
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/html-elements')
    })

    // after each of the test below execute this block 
    afterEach(() => {
        cy.log('You can put all your after actions for each test case in this suite')
    })


    it('Validate Frontend Html Elements', () => {

        cy.get('p').should('have.length.at.least', 5)

        cy.get('p[id]').should('have.length.lessThan', 5)

        cy.get('p[id="hello_paragraph"]').should('have.length', 1)

    })

    it('Validate Html Elements paragraphs', () => {

        // Validate that there are 3 button elements
        cy.get('button').should('have.length', 3)

        // Validate that there are 2 button elements with id attribute
        cy.get('button[id]').should('have.length', 2)

        // Validate that there is only one button element with id="register_button"
        cy.get('button[id="register_button"').should('have.length', 1)
    })
})


describe('', () => {
    it('', () => {

        
    })
})