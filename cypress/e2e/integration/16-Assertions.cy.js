/// <reference types="cypress"/>

describe("Assertions", () => {

    beforeEach(() => {
        // This will fail if the page doesnt send 
        cy.visit(`${Cypress.env('SITE_URL')}/frontend`);
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

        /**
   * 1. Navigate to "https://techglobal-training.com/frontend/project-4"
   * 2. Click on Add Product Button > Model Opens
   * 3. Close the model and validate model is not visible
   */

        cy.visit('https://techglobal-training.com/frontend/project-4')

        cy.get('#add_product_btn').click()
        cy.get('.delete').click()

        cy.get('.modal-card')
            // do not use this if you want to validate its not visible anymroe
            // .should('not.be.visible')
            // ** instead, use this **
            .should('not.exist')
    })

    it('Explicit Assertons', () => {

        // This is explicit assertion
        expect(true).equal(true)

        // this is a failure
        // expect(cy.url()).equal(cy.url())

        cy.get('#main_heading').should('have.text', 'Html Elements')

        const el = cy.get('#main_heading')

        el.should('have.text', 'Html Elements')



        cy.get('#main_heading').invoke('text').then((element) => {
            const el = element
            cy.log(el.toUpperCase() + ' retrieved element')

            expect(el).equal('Html Elements')
        })


        cy.get('#main_heading').then(($ele) => {
            const el = $ele.text()
            cy.log(el.toUpperCase())
            expect(el).to.equal('Html Elements')
            expect(el).to.include('Html Elements')
            expect(el).to.exist
        })


        cy.get('#main_heading').invoke('attr', 'id').then((attr) => {
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

        // cy.get('#main_heading').should('have.css', 'color', 'rgb(105, 105, 105)')


        cy.get('#main_heading').then(($el) => {
            expect($el.css('color')).to.equal('rgb(105, 105, 105)')
        })
    })

    it('Validate Multiple Elements', () => {

        cy.get('#hello_paragraph').should('be.visible').and('have.text', 'Hello World!')
        cy.get('#testing_paragraph').should('be.visible').and('have.text', 'I like automation testing!')

        cy.get('[data-identifier="Paragraphs"] > p').as('paragraps')

        const arr = ['Hello World!', 'I like automation testing!']

        for (let i = 0; i < arr.length; i++) {
            cy.get('@paragraps').eq(i).should('have.text', arr[i])
        }

        cy.get('@paragraps').each(($el, index) => {
            // cy.log($el.text() + `${index}. of the web element`)
            expect($el.text()).to.equal(arr[index])
            expect($el).to.be.visible
        })
    })
    it('Explicit Assertons', () => {

        // This is explicit assertion
        expect(true).equal(true)

        // this is a failure
        // expect(cy.url()).equal(cy.url())

        cy.get('#main_heading').should('have.text', 'Html Elements')

        const el = cy.get('#main_heading')

        el.should('have.text', 'Html Elements')



        cy.get('#main_heading').invoke('text').then((element) => {
            const el = element
            cy.log(el.toUpperCase() + ' retrieved element')

            expect(el).equal('Html Elements')
        })


        cy.get('#main_heading').then(($ele) => {
            const el = $ele.text()
            cy.log(el.toUpperCase())
            expect(el).to.equal('Html Elements')
            expect(el).to.include('Html Elements')
            expect(el).to.exist
        })


        cy.get('#main_heading').invoke('attr', 'id').then((attr) => {
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

        // cy.get('#main_heading').should('have.css', 'color', 'rgb(105, 105, 105)')


        cy.get('#main_heading').then(($el) => {
            expect($el.css('color')).to.equal('rgb(105, 105, 105)')
        })
    })

    it('Validate Multiple Elements', () => {

        cy.get('#hello_paragraph').should('be.visible').and('have.text', 'Hello World!')
        cy.get('#testing_paragraph').should('be.visible').and('have.text', 'I like automation testing!')

        cy.get('[data-identifier="Paragraphs"] > p').as('paragraps')

        const arr = ['Hello World!', 'I like automation testing!']

        for (let i = 0; i < arr.length; i++) {
            cy.get('@paragraps').eq(i).should('have.text', arr[i])
        }

        cy.get('@paragraps').each(($el, index) => {
            // cy.log($el.text() + `${index}. of the web element`)
            expect($el.text()).to.equal(arr[index])
            expect($el).to.be.visible
        })

        /**
        * 1. On the Html Elements page
        * 2. From the "Headings" section, locate both "Programming Languages" and "Automation Tools" web elements
        * 3. Validate their texts with expected text
        * 4. Validate these elements are visible.
        */

        const headingTexts = ['Programming Languages', 'Automation Tools']

        cy.get('[data-identifier="Headings"] > h4').each(($el, index) => {
            cy.wrap($el).should('have.text', headingTexts[index]).and('be.visible')
        })

        /**
         * 1. On the Html Elements Page
         * 2.
         */

        const checkBoxTexts = ['Apple', 'Microsoft', 'Tesla']

        cy.get('#checkbox-button-group div').each(($el, index) => {

            cy.wrap($el).find('label').should('have.text', checkBoxTexts[index])
            .parent().find('input').should('be.visible').and('be.enabled')
        })
    })

       /**
         * 1. Go to https://techglobal-training.com/frontend
         * 2. Navigate to 'Html Elements' card
         * 3. From the "Text Inputs" section
         * 4. Validate text input 1 and text input 2 is enabled
         * 5. Validate text input 1 and text input 2 is is not required
        * 6. Enter your name and last name
        */

       it('Validating more stuff', () => {
            const names = ['Zaid', 'Hammad']

            cy.get('[data-identifier="Text Inputs"] input').each(($el, index) => {
            cy.wrap($el).type(names[index]).should('be.enabled').and('not.have.attr', 'required')

            })
       })

       it('Validating even more stuff', () => {
        const dates = ['10/20/2017', '01/22/2023']

        cy.get('data-identifier="Date Inputs"] input').each(($el, index) => {
        cy.wrap($el).clear().type(`${dates[index]}{enter}`)
        .should('have.value', dates[index])
        .and('be.enabled')
        .and('not.have.attr', 'required')
        })
   })

   it('wow', () => {
    const options = ['Apple', 'Microsoft']

    cy.get('#company_dropdown1, #company_dropdown2').each(($el, index) => {
        cy.wrap($el).select(options[index]).should('be.enabled').and('have.value', options[index])
    })
})
})
