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
        return cy.get('button[type]')
    }

    getDropDown() {
        return cy.get('.select > select')
    }

    getDatePickers(){
        return cy.get('.react-datepicker__input-container > input')
    }

    // Methods


}

export default Booking