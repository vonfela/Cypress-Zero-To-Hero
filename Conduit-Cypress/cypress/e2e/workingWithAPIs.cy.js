/// <reference types="cypress" />

it('first test', () => {

    cy.intercept('GET', 'https://conduit-api.bondaracademy.com/api/tags', {fixture: tags.json}) // intercept (arguments with the method of/and the endpoint that we want to manipulate, and then we manipulate pasisng our fixture file which is the json file expected as reposonse of this API call), according to cypress documentationg on spying/intercepting,stubing
    cy.intercept('GET', '', {fixture: artices.json})
    cy.loginToApplication()

})