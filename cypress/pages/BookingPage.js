import BasePage from './BasePage'

class Booking extends BasePage {
    
    // Locators 
    getInputLabels() {
        return cy.get('.field > label')
    }

    getRadioInput() {
        return cy.get('.mr-1')
    }

    getBookButton() {
        return cy.get('.null')
    }

    getDropDown() {
        return cy.get('.select > select')
    }

    getDatePickers() {
        return cy.get('.react-datepicker__input-container > input')
    }

    getResult() {
        return cy.get('.ml-3')
    }

    getResult2() {
        return cy.get('.mt-4 > p')
    }

    // Methods


}

export default Booking