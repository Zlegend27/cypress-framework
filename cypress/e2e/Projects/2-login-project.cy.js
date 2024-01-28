/// <reference types="cypress"/>

describe('login project', () => {

    beforeEach(() => {
        // Navigate to https://techglobal-training.com/frontend/project-2 --->   ✓
        cy.visit(`${Cypress.env('SITE_URL')}/frontend/project-2`)
    })

    /* TASK 1 
    */
    it('Test Case 01 - Validate the login form', () => {

        const label = ['Please enter your username', 'Please enter your password']
        const text = ['LOGIN', 'Forgot Password?']

        // Validate that the username input box is displayed  --->   ✓
        // Validate that the username input box is not required  --->   ✓
        // Validate that the password input box is displayed  --->   ✓
        // Validate that the password input box is not required  --->   ✓
        cy.get('#username, #password').each(($el) => {
            cy.wrap($el).should('not.have.attr', 'required')
        })

        // Validate that the label of the username input box is "Please enter your username"  --->   ✓
        // Validate that the label of the password input box is "Please enter your password"  --->   ✓
        cy.get('div label').each(($el, index) => {
            expect($el.text()).to.equal(label[index])
        })

        // Validate the "LOGIN" button is displayed  --->   ✓
        // Validate the "LOGIN" button is clickable  --->   ✓
        // Validate that the button text is "LOGIN"  --->   ✓
        cy.get('#login_btn').should('be.enabled').and('have.text', 'LOGIN')

        // Validate the "Forgot Password?" link is displayed  --->   ✓
        // Validate that the "Forgot Password?" link is clickable  --->   ✓
        // Validate that the link text is "Forgot Password?"  --->   ✓
        cy.get(':nth-child(4) > a').should('have.text', 'Forgot Password?').click()
    })

    // Task 2 
    it('Test Case 02 - Validate the valid login', () => {
        const loginInfo = ['TechGlobal', 'Test1234']

        // Enter the username as "TechGlobal"  --->   ✓
        // Enter the password as "Test1234"  --->   ✓
        cy.get('#username, #password').each(($el, index) => {
            cy.wrap($el).type(loginInfo[index])
        })

        // Click on the "LOGIN" button  --->   ✓
        cy.get('#login_btn').click()

        //  Validate the success message is displayed as "You are logged in"  --->   ✓
        cy.get('#success_lgn').should('have.text', 'You are logged in')

        // Validate the logout button displayed with the text "LOGOUT"  --->   ✓
        cy.get('#logout').should('have.text', 'LOGOUT')
    })

    // Task 3
    it('Test Case 03 - Validate the logout', () => {
        const loginInfo = ['TechGlobal', 'Test1234']

        // Enter the username as "TechGlobal"  --->   ✓
        // Enter the password as "Test1234"  --->   ✓
        cy.get('#username, #password').each(($el, index) => {
            cy.wrap($el).type(loginInfo[index])
        })

        // Click on the "LOGIN" button  --->   ✓
        cy.get('#login_btn').click()

        // Click on the “LOGOUT” button  --->   ✓
        cy.get('#logout').click()

        // Validate that the login form is displayed  --->   ✓
        cy.get('#login_btn').should('be.visible')
    })

    // Task 4 
    it('Test Case 04 - Validate the Forgot Password? Link and Reset Password modal', () => {

        // Click on the “Forgot Password?” link  --->   ✓
        cy.get(':nth-child(4) > a').as('forgotPass')
        cy.get('@forgotPass').click()

        // Validate that the modal heading “Reset Password” is displayed  --->   ✓
        cy.get('#modal_title').should('be.visible')

        // Validate that the close button is displayed  --->   ✓
        cy.get('.delete').should('be.visible')

        // Validate that the email input box is displayed  --->   ✓
        cy.get('#email').should('be.visible')

        // Validate that the label of the email input box is “Enter your email address and we'll send you a link to reset your password.”  --->   ✓
        cy.get(':nth-child(1) > label').should('have.text', 'Enter your email address and we\'ll send you a link to reset your password. ')

        // Validate the “SUBMIT” button is displayed  --->   ✓
        // Validate the “SUBMIT” button is clickable  --->   ✓
        // Validate that the button text is “SUBMIT”  --->   ✓
        cy.get('#submit').should('be.enabled').and('have.text', 'SUBMIT')
    })

    // Task 5 
    it('Test Case 05 - Validate the Reset Password modal close button', () => {
         // Click on the “Forgot Password?” link  --->   ✓
         cy.get(':nth-child(4) > a').as('forgotPass')
         cy.get('@forgotPass').click()

         // Validate that the “Reset Password” modal is displayed  --->   ✓
         cy.get('.modal-card-body').should('be.visible')

         // Click on the close button  --->   ✓
         // Validate that the “Reset Password” modal is closed  --->   ✓
        cy.get('.delete').click()
        cy.get('.is-active').should('not.exist')
    })

    // Task 6 
    it('Test Case 06 - Validate the Reset Password form submission', () => {
         // Click on the “Forgot Password?” link  --->   ✓
         cy.get(':nth-child(4) > a').as('forgotPass')
         cy.get('@forgotPass').click()   
        
         // Enter an email  --->   ✓
         cy.get('#email').then(($el) => {
            cy.wrap($el).type('zhammad181@gmail.com')
         })
         // Click on the “SUBMIT” button  --->   ✓
         cy.get('#submit').click()

         // Validate the form message “A link to reset your password has been sent to your email address.” is displayed under the “SUBMIT” button  --->   ✓
         cy.get('#confirmation_message').should('have.text', 'A link to reset your password has been sent to your email address.')
    })

    // Task 7 
    it('Test Case 07 - Validate the invalid login with the empty credentials', () => {
        // Leave username empty  --->   ✓
        // Leave password empty  --->   ✓
        // Click on the “LOGIN” button  --->   ✓
        cy.get('#login_btn').click()

        // Validate the failure message is displayed as “Invalid Username entered!” above the form  --->   ✓
        cy.get('#error_message').should('have.text', 'Invalid Username entered!')
    })

    // Task 8 
    it('Test Case 08 - Validate the invalid login with the wrong username', () => {
        const loginInfo = ['John', 'Test1234']

        // Enter the username as “John”  --->   ✓
        // Enter the password as “Test1234”  --->   ✓
        cy.get('#username, #password').each(($el, index) => {
            cy.wrap($el).type(loginInfo[index])
        })
        // Click on the “LOGIN” button  --->   ✓
        cy.get('#login_btn').click()

        // Validate the failure message is displayed as “Invalid Username entered!” above the form  --->   ✓
        cy.get('#error_message').should('have.text', 'Invalid Username entered!')
    })

    // Task 9 
    it('Test Case 09 - Validate the invalid login with the wrong password', () => {
        const loginInfo = ['TechGlobal', '1234']

        // Enter the username as “TechGlobal”  --->   ✓
        // Enter the password as “1234”  --->   ✓  
        cy.get('#username, #password').each(($el, index) => {
            cy.wrap($el).type(loginInfo[index])
        })      
         // Click on the “LOGIN” button  --->   ✓
         cy.get('#login_btn').click()

         // Validate the failure message is displayed as “Invalid Password entered!” above the form  --->   ✓
        cy.get('#error_message').should('have.text', 'Invalid Password entered!')
    })

    // Task 10 
    it('Test Case 10 - Validate the invalid login with the wrong username and password', () => {
        const loginInfo = ['John', '1234']

        // Enter the username as “John”  --->   ✓
        // Enter the password as “1234”  --->   ✓  
        cy.get('#username, #password').each(($el, index) => {
            cy.wrap($el).type(loginInfo[index])
        })      
         // Click on the “LOGIN” button  --->   ✓
         cy.get('#login_btn').click()

         // Validate the failure message is displayed as “Invalid Username entered!” above the form  --->   ✓
        cy.get('#error_message').should('have.text', 'Invalid Username entered!')
    })
})



