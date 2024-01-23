/// <reference types="cypress"/>

describe('Actions', () => {

    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/html-elements')
    })

    /* 
        TEST CASE:
Go to https://techglobal-training.com/frontend/html-elements
Validate that 'Enter text here' input is visible
Validate that 'Enter text here' is enabled (textable)
Validate that 'Enter text here' input placeholder is 'Enter text here'
Enter 'Cypress' to 'Enter text here' input
Validate that 'Enter text here' input value is 'Cypress'
Clear the text from the 'Enter text here' input
Validate that 'Enter text here' input value is empty
    */

    it('Actions | Type & Clear', () => {
        cy.get('#text_input1')
            .should('be.visible')
            .and('be.enabled')
            .and('have.attr', 'placeholder', 'Enter text here')
            .type('Cypress')
            .should('have.value', 'Cypress')
            .clear()
            .should('have.value', '')

            //cy.get('#text_input2').parent().parent().children('label')

            cy.get('#text_input2').as('EnterTextBelowInput')
            cy.contains('Enter text below').should('be.visible').and('have.text', 'Enter text below')
            const word = 'JavaScript'
            cy.get('@EnterTextBelowInput').should('be.visible').and('be.enabled')
            .type(word)
            .should('have.value', word)
            .clear()
            .should('have.value', '')

            
        })

        it('Actions | Check Radio Buttons', () => {
            cy.get('#js_radio').should('be.visible').and('have.text', 'JavaScript')
            cy.get('#radio_1_option_2')
            .should('be.visible')
            .and('not.be.checked')
            .check()
            .should('be.checked')
            // Validate C# radio button
        })

        it('Actions | Select', () => {
            cy.get('#company_dropdown1').should('be.visible')
            cy.get('#company_dropdown1 option:selected').should('have.text', 'Select a company...')

            // 1. selecting by visible text
            cy.get('#company_dropdown1').select('Microsoft')

            // 2. selecting by value
            cy.get('#company_dropdown1').select('Apple')
            
            // 3. selecting by index
            cy.get('#company_dropdown1').select(3)


        })
        
    })

