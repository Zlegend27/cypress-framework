/// <reference types="cypress"/>

/*
TEST CASE:
Go to https://techglobal-training.com/frontend/actions
Validate that 'Click on me' button is visible
Validate that 'Click on me' button is enabled (clickable)
Validate that 'Click on me' button text 'Click on me'
Click on 'Click on me' button
Validate 'You clicked on a button!' paragraph is displayed with it's text to be 'You clicked on a button!'
*/


describe('Actions', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/actions')
    })

    it('Actions | click', () => {
        cy.get('#click').should('be.visible').and('be.enabled').and('have.text', 'Click on me')
        cy.get('#click').click()
        cy.get('#click_result').should('have.text', 'You clicked on a button!')
    })

    it('Actions | Right Click', () => {
        cy.get('#right-click').as('RightClick')
        cy.get('@RightClick').should('be.visible').and('be.enabled').and('have.text', 'Right-Click on me')
        cy.get('@RightClick').rightclick()
        cy.get('#right_click_result').should('have.text', 'You right-clicked on a button!')
        
    })

    it('Actions | Double click', () => {
        cy.get('#double-click').should('be.visible').and('be.enabled').and('have.text', 'Double-Click on me')
        cy.get('#double-click').dblclick()
        cy.get('#double_click_result').should('have.text', 'You double-clicked on a button!')
    })

    /*
TEST CASE:
Go to https://techglobal-training.com/frontend/actions
Validate that 'Enter your message' input is visible
Validate that 'Enter your message' is enabled (textable)
Validate that 'Enter your message' input placeholder is 'Enter your message...'
Enter 'Cypress' to 'Enter your message' input
Validate that 'Enter your message' input value is 'Cypress'
Clear the text from the 'Enter your message' input
Validate that 'Enter your message' input value is empty
    */

it('Actions | Type & Clear', () => {
    cy.get('#input_box')
    .should('be.visible')
    .and('be.enabled')
    .and('have.attr', 'placeholder', 'Enter your message...')
    .type('Cypress')
    .should('have.attr', 'value', 'Cypress')
    .clear()
    .should('have.attr', 'value', '')
})
})