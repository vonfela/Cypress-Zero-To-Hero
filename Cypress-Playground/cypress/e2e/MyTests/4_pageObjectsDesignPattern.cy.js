/// <reference types="cypress"/>

beforeEach('Open test application', () => {
    cy.visit('/')
})

//_____________________________________________________46. What is Page Objects, Seção 6:
// The core idea is that you take the repetitive parts of you code, put them into the functions or methods, and then instead off calling
// the steps directl, you call the method that implement those steps.
// Improving reusability because you don't need to copy/paste the code anymore and maintainability as well, when you need to update your tests
// you just update the implementation of the method instead of the implementation in every single test.

it.only('', () => {})