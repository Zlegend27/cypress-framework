/// <reference types="cypress"/>

describe('Custom Commands', () => {

    beforeEach(() => {
      cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
      cy.clickCard('Html Elements')
    })
    
    it('Parent Commands', () => {
        
        /* 
        
        Parent Commands 
        - cy.get()
        - cy.url()
        - cy.title()
        - cy.visit()
        - cy.window()
        - cy.on()

        Child Commands 
        - .click()
        - .type()
        - .find()
        - .should()
        - .then()
        - .each()
        - .invoke()

        Dual Commands 
        - cy.contains
        - cy.screenshot()
        - cy.scrollTo()

        */

       //  cy.get('#webElement').select('option1')

        cy.selectDropdownOption('#company_dropdown1', 'Apple')
        cy.selectDropdownOption('#company_dropdown2', 'Microsoft')

        cy.login('Tech', 'Global')
    })

    it('Child Command', () => {

        cy.get('#main_heading').then(($el) => {
            const text = $el.text()

            cy.log(`My text is: ${text}`)
        })

        cy.get('#main_heading').logText()

        cy.get('#main_heading').assertAttribute('id', 'main_heading1')
    })
  })