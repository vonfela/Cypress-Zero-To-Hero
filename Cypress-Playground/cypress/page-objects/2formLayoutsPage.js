

class FormLayoutsPage{

    /**
     * 50.METHODS ANNOTATIONS.
     * Method to submit using the Grid Form with valid user credentials
     * @param {string} email - validar user email
     * @param {string} password - validar user password
     * @param {number} optionIndex - provide index of the option radio button. Start from 0.
     */

    submitUsingTheGridForm(email, password, optionIndex){
        cy.contains('nb-card', 'Using the Grid').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="radio"]').eq(optionIndex).check({force: true})
            cy.wrap(form).contains('Sign in')
        })
    }

    submitBasicForm(email, password, isCheckboxSelected){
        cy.contains('nb-card', 'Basic form').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            if(isCheckboxSelected){
                cy.wrap(form).find('[type="checkbox"]').check({force: true})
            }
            cy.wrap(form).contains('Submit')
        })
    }

}

export const onFormLayoutsPage = new FormLayoutsPage()