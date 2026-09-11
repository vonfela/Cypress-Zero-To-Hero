/// <reference types="cypress"/>

import { onFormLayoutsPage } from "../../page-objects/2formLayoutsPage"
import { navigateTo } from "../../page-objects/1navigationPage"
import { onDatepickerPage } from "../../page-objects/3datepickerPage"

beforeEach('Open test application', () => {
    //cy.visit('/')
    cy.openHomePage()
})

//_____________________________________________________46. What is Page Objects, Seção 6:
// The core idea is that you take the repetitive parts of you code, put them into the functions or methods, and then instead off calling
// the steps directl, you call the method that implement those steps.
// Improving reusability because you don't need to copy/paste the code anymore and maintainability as well, when you need to update your tests
// you just update the implementation of the method instead of the implementation in every single test.




//_____________________________________________________47. First Page Object, Seção 6:
// DRY = Dont Repeat Yourself
// KISS = Keep It Stupid Simple


//_____________________________________________________48. Conditional Object Function, Seção 6:

it('navigation test', () => {

    navigateTo.datePickerPage()
    navigateTo.formLayoutsPage()
    navigateTo.tooltipPage()
    navigateTo.toasterPage()
    
})


//_____________________________________________________49. Parametrized Object Method, Seção 6:
it.only('test with page object', () => {
    navigateTo.formLayoutsPage()
    onFormLayoutsPage.submitUsingTheGridForm('test@test.com', 'Welcome', 0)
    onFormLayoutsPage.submitBasicForm('fct94@live,com', 'Helloooo', true)
    navigateTo.datePickerPage()
    onDatepickerPage.selectCommonDatepickerDateFromToday(5)
    onDatepickerPage.selectRangePickerDateFromToday(10, 50)
})