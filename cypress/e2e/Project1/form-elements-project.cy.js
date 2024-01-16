/// <reference types="cypress"/>

describe('From Elements Tests', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-1')
    })

    it('Test Case 01 | Validate the Contact Us information', () => {

        // Validate the heading is “Contact Us”
        cy.get('.is-size-3').should('have.text', 'Contact Us')

        // Validate the address is “2800 S River Rd Suite 310, Des Plaines, IL 60018”
        cy.get('#address').should('have.text', '2800 S River Rd Suite 310, Des Plaines, IL 60018')

        // Validate the email is “info@techglobalschool.com"
        cy.get('#email').should('have.text', 'info@techglobalschool.com')

        // Validate the phone number is “(224) 580-2150”
        cy.get('#phone-number').should('have.text', '(224) 580-2150')
    })

    it('Test Case 02 | Validate the Full name input box', () => {

        // Validate that the Full name input box is displayed
        // Validate that the Full name input box is required
        // Validate that the placeholder of the Full name input box is “Enter your full name”
        cy.get(':nth-child(1) > .control > .input').should('have.attr', 'placeholder', 'Enter your full name').and('have.attr', 'required')

        // Validate that the label of the Full name input box is “Full name *”
        cy.get('form > :nth-child(1) > .label').should('have.text', 'Full name *')
    })


    it('Test Case 03 - Validate the Gender radio button', () => {
        // Validate the label is “Gender *”
        cy.get('.control > .label').should('have.text', 'Gender *')

        // Validate that the Gender is required
        
        cy.get('.mr-1').first().should('be.enabled').and('have.attr', 'required')
        

        // Validate the options are “Female”, “Male” and “Prefer not to disclose”
        cy.get('.radio').first().should('have.text', 'Male')
        .next().should('have.text', 'Female')
        .next().should('have.text', 'Prefer not to disclose')

        // Validate the options are clickable and not selected
        cy.get('.mr-1').should('be.enabled').and('not.be.checked')
        
        // Click on the “Male” option and validate it is selected while the others are not selected
        cy.get('.mr-1').first().click().should('be.checked')
        cy.get(':nth-child(3) > .mr-1').should('not.be.checked')
        cy.get('.mr-1').last().should('not.be.checked')

        // Click on the “Female” option and validate it is selected while the others are not selected
        cy.get(':nth-child(3) > .mr-1').click().should('be.checked')
        cy.get('.mr-1').first().should('not.be.checked')
        cy.get('.mr-1').last().should('not.be.checked')
    })

    it('Test Case 04 | Validate the Address input box', () => {

        // Validate that the Address input box is displayed
        // Validate that the Address input box is not required
        // Validate that the placeholder of the Address input box is “Enter your address*”
        cy.get(':nth-child(3) > .control > .input').should('have.attr', 'placeholder', 'Enter your address').and('not.have.attr', 'required')
        
        // Validate that the label of the Address input box is “Address”
        cy.get(':nth-child(3) > .label').should('have.text', 'Address')
    })

    it('Test Case 05 | Validate the Email input box', () => {

        // Validate that the Email input box is displayed
        // Validate that the Email input box is required
        // Validate that the placeholder of the Email input box is “Enter your email”
        cy.get(':nth-child(4) > .control > .input').should('have.attr', 'placeholder', 'Enter your email').and('have.attr', 'required')

        // Validate that the label of the Email input box is “Email *”
        cy.get(':nth-child(4) > .label').should('have.text', 'Email *')
    })

    it('Test Case 06 | Validate the Phone input box', () => {

        // Validate that the Phone input box is displayed
        // Validate that the Phone input box is not required
        // Validate that the placeholder of the Address input box is “Enter your phone number”
        cy.get(':nth-child(5) > .control > .input').should('have.attr', 'placeholder', 'Enter your phone number').and('not.have.attr', 'required')

        // Validate that the label of the Phone input box is “Phone”
        cy.get(':nth-child(5) > .label').should('have.text', 'Phone')
    })

    it('Test Case 07 | Validate the Message text area', () => {

        // Validate that the Message text area is displayed
        // Validate that the Message text area is not required
        // Validate that the placeholder of the Message text area is “Type your message here…”
        cy.get('.textarea').should('have.attr', 'placeholder', 'Type your message here...').and('not.have.attr', 'required')

        // Validate that the label of the Message text area is “Message”
        cy.get(':nth-child(6) > .label').should('have.text', 'Message')
    })

    it('Test Case 08 - Validate the Consent checkbox', () => {

        // Validate the label is “I give my consent to be contacted.”
        cy.get('.checkbox').should('have.text', ' I give my consent to be contacted.')
        
        // Validate that the Consent checkbox is required
        // Validate that the Consent checkbox is clickable
        // Click on the “I give my consent to be contacted.” checkbox and validate it is selected
        cy.get('.checkbox > input').click().should('be.checked').and('be.enabled').and('have.attr', 'required')
        
        // Click on the “I give my consent to be contacted.” checkbox again and validate it is not selected
        cy.get('.checkbox > input').click().should('not.be.checked')
    })
})