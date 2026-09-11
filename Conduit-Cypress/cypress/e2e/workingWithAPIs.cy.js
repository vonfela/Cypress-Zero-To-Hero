/// <reference types="cypress" />

it('first test', () => {

    cy.visit('/')

    cy.contains('Sign in').click()
    cy.get('[placeholder="Email"]').type('fela@live.com')
    cy.get('[placeholder="Password"]').type('felinha123')
    cy.contains('button', 'Sign in').click()

})