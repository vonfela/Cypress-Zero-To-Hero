/// <reference types="cypress" />

it('first test', () => {

    cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/tags', {fixture: tags.json})
    cy.intercept('GET', '', {fixture: artices.json})
    cy.loginToApplication()

})