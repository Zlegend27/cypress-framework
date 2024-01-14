/// <reference types="cypress"/>

describe("Assertions", () => {

    beforeEach(() => {
        // This will fail if the page doesnt send 
      cy.visit("https://techglobal-training.com/frontend/");
      cy.get(".cards").contains("Html Elements").click();
    });

    it("Default Assertions", () => {
        cy
        // there is a defualt assertion that thi
        // button must exist in the DOM before processing
        .get('#register_buttom')
        // since cypress internally checks if the web element on the dom tree or not
        // we dont need to below assertion
        // .should('be.visible')

        // before issuing the click, this button must be "actionable"
        // it cannot be covered, or disabled, or hidden from the view
        .click()

        cy.get('#date_input1').click()
        // this will fail necause it wil; be covered by input 1
        cy.get('#date_input2').click()

        cy.get('#text_input1').type('TechGlobal')
    });

    it('Implicit Assertions', () => {

        // Any assertion we do using .should() method, is an "Implicit Assertion"

        cy.get('#main_heading').should('not.be.visible')

        // Checks if the elements text is = to expected text
        cy.get('#main_heading').should('have.text', 'Html Elements')

        cy.get('#main_heading').should('contain.text', 'Html Elements')

        // have.attr chainer checks ithe elements attribute property
        // it can get 2, or 3 arguments, we can validate if element has specific attribute, and the value of it
        cy.get('#main_heading').should('have.attr', 'id')
        cy.get('#main_heading').should('have.attr', 'id', 'main_heading')

        // have.length chainer validates how many web elements our locator returns
        cy.get('[data-identifier="Paragraphs"] > p').should('have.length', 2)
        cy.get('#main_heading').should('have.length', 1)

        // be.eneabled checks if the web element is interactable
        cy.get('#checkbox_1').should('be.enabled')

        // be.checked checks if the web element is checked
        cy.get('#checkbox_1').should('not.be.checked').check().should('be.checked')

        cy.get('#main_heading').should('have.css', 'color', 'rgb(105, 105, 105)')
        cy.get('#main_heading').should('have.css', 'padding', '')
        

    })
    it('add product', () => {
        cy.visit('https://techglobal-training.com/frontend/project-4')
        cy.get('#add_product_btn').click()
        cy.get('.delete').click()

        cy.get('.modal-card')
        // do not use this if you want to validate and its not visible anymore
        .should('not.exist')

        cy.get('#main_heading').invoke('text').then((element) => {
            const el = element
            cy.log(el.trim() + 'retrived element')

            expect(el).equal('Html Elements')
        })

        cy.get('#main_heading').then(($ele) => {
            const el = $ele
            cy.log(typeof el.text())
            expect(el).to.include('Html Elements')
            expect(el).to.exist
        })

        cy.get('#main_heading').invoke('attr', 'id').then((el) => {
            expect(attr).to.equal('main_heading')
        })

        cy.get('#main_heading').then(($el) => {
            const attr = $el.attr('id')
            expect(attr).to.equal('main_heading')
        })

        cy.get('[data-identifier="Paragraphs"] > p').then(($el) => {
            // cy.log($el.length)
    
            expect($el).to.have.length(2)
        })
    
        cy.get('#checkbox_1').then(($el) => {
            expect($el).to.be.enabled
            expect($el).to.be.visible
            expect($el).not.to.be.checked
        })

        // css 
        cy.get('#main_heading').then(($el) => {
            expect($el.css('color')).to.equal('rgb(105, 105, 105')
        })
        
    })

    it('Validate multiple elements', () => {
        cy.get('#hello_paragraph').should('be.visible').and('have.text', 'Hello World!')
        cy.get('#testing_paragraph').should('be.visible').and('have.text', 'I like automation testing!')

        cy.get('[data-identifier')
    })

    
})

   