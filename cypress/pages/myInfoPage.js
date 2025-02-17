class MyInfoPage {

    selectorLists() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericfield: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: ".orangehrm-left-space",
            genericCombobox: ".oxd-select-text--arrow",
            itemCombobox: ".oxd-select-dropdown > :nth-child(27)",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorLists().firstNameField).clear().type(firstName)
        cy.get(this.selectorLists().lastNameField).clear().type(lastName)

    }

    fillEmployeeDetails(idTest, otherIdTest, driversLicenseDate, expiryDate) {
        cy.get(this.selectorLists().genericfield).eq(3).clear().type(idTest)
        cy.get(this.selectorLists().genericfield).eq(4).clear().type(otherIdTest)
        cy.get(this.selectorLists().genericfield).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorLists().genericfield).eq(6).clear().type(expiryDate)
        cy.get(this.selectorLists().dateCloseButton).eq(0).click()

    }

    saveForm() {
        cy.get(this.selectorLists().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')

    }

    fillStatus() {
        cy.get(this.selectorLists().genericCombobox).eq(0).click()
        cy.get(this.selectorLists().itemCombobox).click()
        cy.get(this.selectorLists().genericCombobox).eq(1).click()
        cy.get(this.selectorLists().secondItemCombobox).click()
    }
}


export default MyInfoPage