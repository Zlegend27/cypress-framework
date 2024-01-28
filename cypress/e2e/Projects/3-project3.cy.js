/// <reference types="cypress"/>
import Booking from '../../pages/BookingPage.js'

describe('login project', () => {

    beforeEach(() => {
        cy.fixture('booking').then(function (data) {
            this.labels = data.labels
            this.dropdowns = data.dropdowns
            this.onePassOneWay = data.onePassOneWay
            this.onePassRound = data.onePassRound
            this.twoPass = data.twoPass
        })

        // Navigate to https://techglobal-training.com/frontend/project-3 --->   ✓
        cy.clickCard('Project - Booking Function')
    })

    const booking = new Booking()

    it('Test Case 01 - Validate the default Book your trip form', function () {

        booking.getInputLabels().each(($el, index) => {
            cy.wrap($el).should('have.text', this.labels[index])
        })

        // Validate that the “One way” radio button is displayed enabled and selected by default
        booking.getRadioInput().each(($el, index) => {
            cy.wrap($el).should('be.enabled')
            if (index === 0) {
                cy.wrap($el).should('have.attr', 'checked')
            } else {
                cy.wrap($el).should('not.have.attr', 'checked')
            }
        })

        booking.getBookButton().should('be.enabled')

        booking.getDropDown().each(function($el, index) {
            cy.wrap($el).should('be.visible')
            if (index === 3) {
                cy.wrap($el).invoke('val').should('eq', this.dropdowns[index - 3])
            }
            else if (index === 4) {
                cy.wrap($el).invoke('val').should('eq', this.dropdowns[index - 3])
            }
        })

        booking.getDatePickers().each(function ($el, index) {
            cy.wrap($el).should('be.visible')
            if (index === 1) {
                cy.wrap($el).should('not.be.enabled')
            }
        })

    })

    it('Test Case 02 - Validate the Book your trip form when Round trip is selected', () => {

        // Click on the “Round trip” radio button and validate it is selected
        // Validate that the “One way” radio button is not selected
        booking.getRadioInput().last().click().should('be.checked')
        booking.getRadioInput().first().should('not.be.checked')

        booking.getRadioInput().each(($el, index) => {
            cy.wrap($el).should('be.enabled')
            if (index === 0) {
                cy.wrap($el).should('have.attr', 'checked')
            } else {
                cy.wrap($el).should('not.have.attr', 'checked')
            }
        })

        booking.getDatePickers().should('be.visible')

        booking.getBookButton().should('be.enabled')
    })

    const onePassOneWay = ['One way', 'Business', 'Illinois', 'Florida', 1, 'Senior (65+)']
    const onePassRound = ['Round trip', 'First', 'California', 'Illinois', 1, 'Adult (16-64)']
    const twoPass = ['One way', 'Premium Economy', 'New York', 'Texas', 2, ['Adult (16-64)', 'Child (2-11)']]
    const trips = [onePassOneWay, onePassRound, twoPass]
    // const trips = [this.onePassOneWay, this.onePassRound, this.twoPass]
    trips.forEach(function(trip, index){
        it(`Test Case ${index + 3}`, function() {
            booking.getRadioInput().parent().each(function($el){
                const el = $el.text()
                // cy.log(el)
                // cy.debug()
                if(el === trip[0]){
                    cy.wrap($el).click()
                }
            })
        })
    })
})

