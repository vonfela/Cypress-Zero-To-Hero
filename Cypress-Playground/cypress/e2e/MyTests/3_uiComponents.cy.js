/// <reference types="cypress"/>

beforeEach('Open Application', () => {
    cy.visit('/')
})


//_____________________________________________________33. INPUT FIELDS, Seção 5:


it('Input Fields', () => {
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()


    const name = 'Felinha'      // Sometime you may eed to print the variable value inside of the input field, this is a manner how to do it, soo here we create a variable to hold a name for example and on line 18 we call it to type part of the email on .type() method.
    cy.get('#inputEmail1').type('hello@test.com', {delay: 100}).clear().type('fct94@live.com').clear()      // here we are getting the email input field by hid ID and typing in the email/text
    cy.contains('nb-card', 'Using the Grid').contains('Email').type(`${name}@test.com`)

    cy.get('#inputEmail1').should('have.value', `${name}@test.com`).clear().type('ArtefatoDigital')       // Sometime you may have a situations in your scenarios that you need to open the page with any input that may are already there, you need to clear this input and type your own value. What can happend is that this content might be dynamic or Cypress could be faster inserting your value before the page loads completely and insert back the original (and possibly dynamic) content so this can make you test flaky, to avoid situations like this it would be considered a good practice to make assertion of this input field BEFORE modifying so that way assertion wait for the value for the initial value of the input field and then you can update, modify, and do whatever with it.
    cy.get('#inputEmail1').should('not.have.value', '').clear().type(`${name}`)        // Here is the solution for dynamic content, we use a negative assertion using "should have not" logic and passing an empty text to compare/expect, so essentially the logic here is saying: hey, I would expect that input field would NOT be empty and when it`s not empty, then clear this value and type what I want.
    .press(Cypress.Keyboard.Keys.TAB)       // Those key modifiers mostly for accessibility testing. One combination key does not work with these key modifiers is TAB key, so when you need to tab Cypress has a specific method that support just this


    // You can also do different key press like in a login page:
    cy.contains('Auth').click()
    cy.contains('Login').click()

    cy.get('#input-email').type('test@artefatod.com')
    cy.get('#input-password').type('Cruz{enter}')      // Instead of clicking on the login button we hit the enter key with the {enter}

    // Those key modifiers mostly for accessibility testing.
    // One combination key does not work with these key modifiers is TAB key, so when you need to tab Cypress has a specific method that support just this.
    // This is useful for accessibility testing if you need to test how yser can navigate back and forth in your application.

})



//_____________________________________________________34. RADIO BUTTONS, Seção 5:

// Cypress has a special method called .check(), this method works only with radio buttons and checkboxes.
// You can also select the radio buttons using just regular click commands.

it('Radio buttons', () => {
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( allRadioButtons => {      // Here we are getting all page buttons as type is radio buttons and then holding/storing in a variable to wrap/use below as a list/array/index, selecting each index item with .eq() method and passing the index value of the item you want to select as argument.
        cy.wrap(allRadioButtons).eq(0).check({force: true}) // in this case it is working but it may cause error because of Cypress actionability, that means Cypress is waiting the element get visible/clickable/etc, if we inspec the radio button Option 1 we can see that it has a class with value "visually-hidden" this means that this applications is hiding the native HTML radio button and it's only showing the vueJS(?) visual but using HTML's radio button functionality so technily Cypress can't see this element even we can see this element and it is "iteractable" on web page. But you can overcome this using the flag {force: true} as argument in .check() method, not just in check method but in any command. So when you pass the force true flag, it means that you are disabling actionability checks and youáre telling Cypress: Hey, find this web element and interact with it even if it is not ready.
        .should('be.checked')       // Here we are just validating that the radio button Option 1 is checked correctly with this .should().
        cy.wrap(allRadioButtons).eq(1).check({force: true})     // checking radio button Option 2
        cy.wrap(allRadioButtons).eq(0).should('not.be.checked')     // Here we are validating that radio button Option 1 is not checked anymore after we've checked Option 2.
        cy.wrap(allRadioButtons).eq(2).should('be.disabled')        // Here we are validating that the 3rd radio button called "Disabled option" is really disabled.
    })
    // BE CAREFUL: Use force true only when you really know that there is no other way around how to by pass this problem and you understand the consequences, so use carefuly because your test may be more flaky.

    cy.contains('nb-card', 'Using the Grid').contains('label', 'Option 1').find('input').click({force: true})       // You can try to use like this (passing the force flag on check method) but in this case will not work because of application's structures, the radio button's text/label it is located in a span, a sibling(parente/irmão) element to the input elemenet where it can actually receive the action for the checking the radio button.
    // There are a couple of workarounds:
    // 1. .click() method instead of .check()
    // 2. Target parent element: The second option is that you can target the parent element for this span (as first argument for the .contains() method) which is a label tag/element and then from a label find (which is a child tag/element) the input field and then you can use check or click or whatever
    // IMPORTANT: You can use click but it's recommend to use .check() methods because this is what is recommended by the Cypress framework for radio buttons.



})

//_____________________________________________________35. CHECKBOXES, Seção 5:

// Similarly to the radio buttons if I inspect checkboxes is also input element that have a checkboxes (type="checkbox")
// and you can use method .check() to interact with this type of the input element ONLY IF THE TYPE IS CHECKBOX

it('Checkboxes', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()

    cy.get('[type="checkbox"]').check({force: true})
    cy.get('[type="checkbox"]').should('be.checked')


})

// This is the feature of this method .check(), so technically check or uncheck method not only click/check on the checkbox, it's set the state for the checkbox, so if you want checkbox to be checked regardless of the current state of the checkbox, the checkbox will be selected or unselected, so compared to the .click() command/method it just doesn't care. Click method acts different, it reverses the current state that the element are in, for exemple if the checkbox is checked and we click on it, it will be unchecked.
// Another. IMPORTANT thing to notice is that as we are getting our locator as all checkboxes on the page, the .check() method will check/uncheck all elements found, if we use .click() method it will not work the same way because can perform only on a single element. But .click() method has a second flag called {multiple: true} and using this flag it will work clicking on all elements founds and not just obligating me to select one specif or use .check() method but it is still preferible to use .check() method.



//_____________________________________________________36. LISTs AND DROPDOWNS, Seção 5:

// There are two different type of dropdowns you may see on the web pages:
// 1. Native dropdown for the browser
// 2. Custom dropdowns


it('Lists and Dropdowns', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Toastr').click()

    // Native browser dropdown:
    cy.contains('div', 'Toast type:').find('select').select('info')     // To select any value from this native dropdown we use method .select(), so to select the values from this type of dropdowns I don't need to click on this, I can use just .select() method and it is smart enough to select the value from the dropdown that I need
    .should('have.value', 'info')       // Since this behave similarly like the input field

    // Custom dropdown:
    cy.contains('div','Position:').find('nb-select').click()    // Click on dropdown to expand it
    cy.get('.option-list').contains('bottom-right').click()     // Again, this is not the input field, this is not the native select dropdown so I cannot use have.value to assert/validate this...
    cy.contains('div', 'Position:').find('nb-select').should('have.text', 'bottom-right')       // ... The actual value is the bottom-right that now is selected and it's visible inside of the DOM so we just have to use have.text validation. And this is the main difference between the native dropdowns and the custom dropdowns.

    // Loop: Select all values from the dropdown one by one, validating that yor selection works successfully (small loop through the list of the elements):
    cy.contains('div', 'Position:').find('nb-select').then(dropdown => {        // Here we are just getting the dropdown element so we can click on it below
        cy.wrap(dropdown).click()       // Wrap the dropdown element got before and click on it to expand it.
        cy.get('.option-list nb-option').each(option=> {       // Here we are getting the dropdown first option list by .class .value space child element nb-option and on .each() method we create a function in it's argument to store all the dropdown's option list values so we can use it with cy.wrap().
            cy.wrap(option).click()     // Here it WILL ONLY WORK UNTIL THE FIRST OPTION because .click is letting test flaky, changing the context, I mean, after clicking on the first option, the dropdown colapse back, changing the state/structure/context of the test and breaking the test...
            cy.wrap(dropdown).click()       // ... TO FIX THIS PROBLEM we need to expand the dropdown again after we select each option so we just need to click on the dropdown again.
        })


        // This is just a tricky/fancy/complex way to do the same as above but validating to let the dropdown closed when/after clicked on the last option on the list/dropdown:
        //cy.contains('div', 'Position:').find('nb-select').then(dropdown => {        
        //    cy.wrap(dropdown).click()       
        //    cy.get('.option-list nb-option').each((option, index, list) => {       
        //        cy.wrap(option).click()
        //        if(index < list.length-1)     
        //            cy.wrap(dropdown).click()       
        //})
    })

})

// IMPORTANT TO NOTICE/REMEMBER: in this case (line 99) when trying to select the dropdown value, sometime in the applcations the value and the visible text/label can be different and method .select() can select by any of those so whatever valye you provide it either will select by value property or by visib;e text.




//_____________________________________________________37. TOOLTIPS, Seção 5:
// It's quite a tricky web element!

it('Tooltips', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Tooltip').click()

    cy.contains('button', 'Top').trigger('mouseenter')           // Ok, unfortunately Cypress does not have method hover but there is a workaround, you can use method trigger and then trigger the event that this button brings up this tooltip. Here we are getting the web element frist by tag <button> and child text 'top' and then triggering the event mouseenter (to find this event specifically you can use the browser's developer tools, inspect the element and on the event listener tab, disabling the ancestors checkbox).
    cy.get('nb-tooltip').should('have.text', 'This is a tooltip')
})

//_____________________________________________________38. DIALOG BOXES, Seção 5:
// Basically there are two type of those:
// 1. One are native for the web application
// and
// 2. The second one is native for the browser 

it('Dialog boxes', () => {
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()

    cy.get('.nb-trash').first().click() // We want to get the first trash can but all the trash cans have the same class which is nb-trash, but they are in a table, listed, so as example we will use the first one so we can use method .first(), is this was not the case we could get the list of this table and navigate/validate using method equal and selecting the rows we want as index options. Also, it was a successful deletion because there was the browser`s confirmation message printed on the last step on the cypress runner, so the trick is that Cypress is configured by default to accept this kind of window, if it pops up, it's default behavior to "click" to close.
    
    // There is two ways to validade this type of native browser dialog boxes:
    // 1. .on() method will listen on different event triggered by the browser and we are looking for window:confirm event, this event is fired when the dialog box shows up, then we are looking into this confirm object and we can make validation right away.
    cy.on('window:confirm', confirm => {
        expect(confirm).to.equal('Are you sure you want to delete?')
    })

    // But this approach has a little issue. So the problem is that cy.on() will work only when this event is triggered, so when window:confirm happend then we can catch the message inside of this window and make a validation. But if window:confirm was not actually fired it up then that is a problem, then we will not know that and we will not be able to validate not just the message but the window overall and because of that there is a second approach which is a little bit more advanced but it will guarantee that if for some reason the dialog box did not show up we will know about it. 

    // 2. This second approach (and more reliable way) which is a little bit more advanced but it will guarantee that if for some reason the dialog box did not show up we will know about it. 
    cy.window().then( win => {      // So for that we need to call cy.window object .then() we get this object (win) and then create cy.stub()
        cy.stub(win, 'confirm').as('dialogBox').returns(true)     // What cy.stub() does, technically we kind of replacing the Cypress native browser native confirm window confirm function with our own custom function, and then from that we drive the behavior of this function by ourselves. the return arguments you set/manipulate if the dialogbox will be accepted or canceled.
    })

    cy.get('.nb-trash').first().click()
    cy.get('@dialogBox').should('be.calledWith', 'Are you sure you want to delete?')


})


//_____________________________________________________39. WEB TABLES (part 1), Seção 5:
// In this first part we will learn HOW TO NAVIGATE
// This is considered one of the most difficult UI components to automate at least one of the most confusing

it.only('Web tables', () => {
    cy.contains('Tables & Data').click()
    cy.contains('Smart Table').click()

    cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
        cy.wrap(tableRow).find('.nb-edit').click()
        cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('35')
        cy.wrap(tableRow).find('.nb-checkmark').click()
        cy.wrap(tableRow).find('td').last().should('have.text', '35')
    })

})