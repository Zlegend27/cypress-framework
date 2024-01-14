/// <reference types="cypress"/>

/*
TEST CASE:
Go to https://www.wikipedia.org/
Type and search for "Cypress"
Validate the main heading equals "Cypress"
Validate the title of the page contains "Cypress"
Validate the url of the page contains "Cypress"
*/

describe('Actions', () => {
    it('Actions | type and click', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Cypress')
        cy.get('[class="sprite svg-search-icon"]').click()
        cy.get('#firstHeading').should('have.text', 'Cypress')
        cy.title().should('contain', 'Cypress')
        cy.url().should('include', 'Cypress')
    })
})
