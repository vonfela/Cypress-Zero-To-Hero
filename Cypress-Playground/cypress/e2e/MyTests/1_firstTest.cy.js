
//_____________________________________________________21. TEST STRUCTURE, SECTION 3:


/// <reference types="cypress" />               


beforeEach('Open test application', () => {     // Hooks: Cypress have a concept called hooks (beforeEach) where you can repeat a certain operation before the test or after the test, or before each test
        cy.visit('/')                           //this will open the base url which is defined in cypress.config.js file
    })

it('hello world 1/test number 1', () => {       // every test in Cypress start with the keyword 'it', 'it' is as method and the hello world inside the parenthesis is the arguments.

})

it('hello world 1/test number 2', () => {

})

describe('Test Suite 1', () => {                //you can also organize your tests in suites or groups using cypress keyword/method 'describe'


    it('hello world 1/test number 1', () => {   // every test in Cypress start with the keyword 'it', 'it' is as method and the hello world inside the parenthesis is the arguments.

    })

    it('hello world 1/test number 2', () => {

    })

    it('hello world 3/test number 3', () => {

    })

    describe('Test Suite 2 inside Test suite 1', () => {

        it('hello world 4/test number 4', () => {

        })

    })

})

// Still about hooks:
//
// There is also 
//    afterEach(anomFunc => {
//       delete screenshots, clear cookies, clear local storage
//    })
//
// which will run after each test

//   before(anomFunc => {
//       delete screenshots, clear cookies, clear local storage
//   })
//
// which will run once before all tests BUT IS NOT RECCOMENDED TO BE USED BECAUSE IT CAN CAUSE TESTS TO BE DEPENDENT ON EACH OTHER
//

//   after(anomFunc => {
//      delete screenshots, clear cookies, clear local storage
//    })
//
// which will run once after all tests BUT IS NOT RECCOMENDED TO BE USED BECAUSE IT CAN CAUSE TESTS TO BE DEPENDENT ON EACH OTHER
//


