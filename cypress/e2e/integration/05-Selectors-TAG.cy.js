/// <reference types="cypress"/>

describe('Selector | TAG', () => {
    it('Validate there is 20 cards displayed', () => {

        cy.visit('https://techglobal-training.com/frontend')
        
        cy.get('a')
        // locates all the elements that are links

        cy.get('button').should('have.length', 0)
        // locates all the elements that are buttons

        cy.get('img')
        // locates all the elements that are images

        cy.get('p')
        // locates all the elements that are paragraphs

        cy.get('h1, h2, h3, h4, h5, h6').should('have.length.below', 1)
        // locates all the elements that are headings

        cy.get('[id]')
        // locates all the elements that have id attribute

        cy.get('button[id]')
        // locates all the elements that are the buttons and have the id attirbute

        cy.get('[class]')
        // locates all the elements that have class attirbute

        cy.get('p[class]')
        // locates all the elements that are paragrpahs and have the class attirbute
    })
})