/// <reference types="cypress" />

beforeEach('Open test application', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
})

//_____________________________________________________24. LOCATOR SYNTAX RULES, SECTION 4:

it('Locators Syntaxes', () => {

    // by tag
    cy.get('input')

    //by ID value
    cy.get('#inputEmail')

    // by class value (single value, because this class has multiples values)
    cy.get('.input-full-width')

    // by attribute (attribute name)
    cy.get('[fullwidth]')

    // by attribute with value 
    cy.get('[placeholder="Email"]')

    // by entire class value
    cy.get('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    // how to combine several attributes? just put them one after another all together
    cy.get('[placeholder="Email"][fullwidth]')  // Another important thing is that you cannot ust space, if you put space between it will behave differently.
    cy.get('input[placeholder="Email"]') // Caution, there is several combinations, in this case we are using tag and attribute with value, but the logic will be: Cypress will look for every input with the placeholder email. Another important thing is that you cannot ust space, if you put space between it will behave differently.

    // find by data-cy attribute
    cy.get('[data-cy="inputEmail1"]')

})

//_____________________________________________________25. CYPRESS LOCATORS, SECTION 4:

it('Cypress Locator Methods', () => {
    //Theory
    //contains() - to find web elements by text
    //find() - to find only child elements
    //get() - to find elements on the page globally
    
    cy.contains('Sign In', {matchCase: false}) // find the first match on the page and partial match (matchCase is a flag, is a example of solution to remove the native case sensitive)
    
    cy.contains('[status="warning"]', 'Sign in') //contais is very powerfull because is very flexible, we can use diferente locators, exact match, partial match.. Here we are combinig a propertie with a text
    
    cy.contains('nb-card', 'Horizontal form') // here we are saying: hey find for me nb-card that have somewhere text horizontal form

    cy.contains('nb-card', 'Horizontal form').find('button') // finding the child element button

    cy.contains('nb-card', 'Horizontal form').get('button') // this will not work because is looking globally, even chaining from contains, the test pass but is a fake impression of a pass test, because this has found all buttons on page and not only the one we want.


})


//_____________________________________________________26. CHILD ELEMENTS, SECTION 4:

it('Child Elements', () => {

    cy.contains('nb-card', 'Using the Grid').find('.row').find('button') // you can chain as many finds as you want/need to chain down the road, but is not recccomended because it will make your tests slower

    cy.get('nb-card').find('nb-radio-group').contains('Option 1') // When you chain commands like this (.get then .find) you can actually use a slightly shorter and more reliable syntax combining two locators as part of the get (example given below)

    cy.get('nb-card nb-radio-group').contains('Option 1') // just combine two locatons on the argument on the get command, the first will be the paren and the second will be considered as child. SO WHEN YOU HAVE SITUATIONS LIKE THIS THAT WHEN YOU FIND FIRST A PARENT ELEMENT USING GET AND THEN YOU WANT TOFIND CHILD ELEMENT USING FIND, TRY TO COMBINE THOSE INTO A SINGLE LOCATOR INSIDE OF THE GET, THIS MAKES YOUR TEST MORE RELIABLE.

    cy.get('nb-card > nb-card-body') // this is another way/better to find child elements that are in direct relation with the parent (are the fist children of the parent)

})



//_____________________________________________________27. PARENT ELEMENTS, SECTION 4:

it('Parent Elements', () => {

    cy.get('#inputEmail1').parents('form').find('button') // First is the way to find the parent elements from the current element, we identified the input field by ID, then we went up to the form level that includes sign in button and then we traveled down to the button itself and button is selected

    cy.contains('Using the Grid').parent().find('button') // Second is if you want to go just a single leve l up in the DOM tree from the current element, use method .parent(), This it`s just another possibility, it`s preferable to use .contains() with two locators as arguments as shown in the previous examples

    cy.get('#inputEmail1').parentsUntil('nb-card-body').find('button') // Final example is when you want to find all parent elements on the way to your target, here you need to provide a locator (nb-card-body) up to the place where you want to stop


})


//_____________________________________________________28. CYPRESS COMMAND CHAINS, SECTION 4:


it('Cypress Chains', () => {

    cy.get('#inputEmail1')
        .parents('form')
        .find('button')
        .click() // Here there is a catch, because .click() method can change the context/DOMs structure and test may break, so the rule is when you create the chains, you can make it as long as you want, but until the action command, once you have the action command, start a new chain.

    cy.get('#inputEmail1')
        .parents('form')
        .find('nb-radio')
        .first()
        .should('have.text', 'Option 1')

})


//_____________________________________________________29. REUSING LOCATORS, SECTION 4:


it('Reusing Locators', () => {

    // THIS WILL NOT WORK!!! DON'T DO LIEK THIS!!! ok, might work but it will backfire, your test will be flaky(instável)
    //const inputEmail1 = cy.get('#inputEmail1') 
    //inputEmail1.parents('form').find('button')
    //inputEmail1.parents('form').find('nb-radio')


    // 1. Cypress Alias
    // Cypress Alias is kind of smart global variable and you can assign anything into this variable. All you need todo do is create the alias once and then within this test run you can call this alias anytime anywhere.
    cy.get('#inputEmail1').as('inputEmail1') //here we create the the inputemail/locator field get method as alias named inputEmail1
    cy.get('@inputEmail1').parents('form').find('button') // and reusing like this using @
    cy.get('@inputEmail1').parents('form').find('nb-radio')

    // 2. Cypress .then() method (caution: it is JQuery method, not Cypress method)...
    // ... This means that we need to convert the JQuery element made on the .then() method using the .wrap() method to convert back to Cypress element
    cy.get('#inputEmail1').then( inputEmail => {
        cy.wrap(inputEmail).parents('form').find('button')
        cy.wrap(inputEmail).parents('form').find('nb-radio')

    })
        // Important to note here is that the .wrap() method can be used to convert any object into Cypress object (text, JSON, etc), so you can use it in Cypress chains


})


//_____________________________________________________30. EXTRACTING VALUES FROM PAGE, SECTION 4:
// Let's grab this label email address, grab this value and then print out the console:
it('Extracting Values', () => {

    // 1. Using JQuery method
    cy.get('[for="exampleInputEmail1"]').then( label => { //this will return you the instance of this web element 
        const emailLabel = label.text() // .text() is a JQuery method to get the text from the label
        console.log(emailLabel) // here I'm just consuming this .then() result which is the text from label stored from the locator of the email input field 
    })

    // 2. Using .invoke() method
    cy.get('[for="exampleInputEmail1"]').invoke('text').then(emailLabel => {  // What this method does, this method can run or invoke different JQuery functions so .text() is technically JQuery function for example.
        console.log(emailLabel)                                               // then we just need to use the variable created to use/invoke this text value that is already invoked from the selector.
    })
    cy.get('[for="exampleInputEmail1"]').invoke('text').as('emailLabel')    // and it also works as alias
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')     // but the method invoke is just to relate to project and stuffs, if you just need to assert, .should() method is always the best option

    // 3. Invoke attribute value (you can do this with any attribute if you need to invoke any HTML attribubute value)
    cy.get('#exampleInputEmail1').invoke('attr', 'class').then(classValue => { // in this example we ae using the class attribute. But remember, this invoke method is just to comunicate better with project if needed, if you just need to assert something you should always prfer to use .should() method as it is a shorter way as e.g. given below
        console.log(classValue)
    })
    cy.get('#exampleInputEmail1').should('have.attr', 'class', 'input-full-width size-medium status-basic shape-rectangle nb-transition')

    // 4. INVOKE INPUT FIELD VALUE
    cy.get('#exampleInputEmail1').type('hello@test.com') // here before we can get the value from the input field (so we will use the same input field) we need to type something into this input field, different from with the attribute example above because the placeholder is an static placeholder as propertie of the element, s[o an dynamic value that will be inserted dynamicly during the user iteraction]
    cy.get('#exampleInputEmail1').invoke('prop', 'value').then( value => { // prop is a JQuery method to get properties of the element. Here we are just invoking and storing the email value typed in the input field, into the 'label' function created inside the .then() method
        console.log(value)      // here I'm just printing the email typed, invoked and stored in the function 'value' created in the .then() method
    }) 

})




//_____________________________________________________31. ASSERTIONS AND RETRY, SECTION 4:


it('Assertions', () => { 

    // 1. Should assertion: Can be chained directly from the Cypress methods:
    cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address') // here we made an assertion that property 'for' have/should contain the text 'Email address'. 
    cy.get('[for="exampleInputEmail1"]').should('have.text', 'Email address') // The keyword 'contain' (e.g. above) is a partial assertion, if you want to make exact match you would have to use use have.text on contain's place.

    // 2. Expect assertion: Can be called only within(dentro) .then() block:
    cy.get('[for="exampleInputEmail1"]').then( label => {
        expect(label).to.contain('Email address')     // Thi 'expect assertion' and the above with .should() method are exactly the same thing, it's just different syntax. The argument of the .contain() expect method is the expect, that means, we expect that contains the text 'Email address'
        expect(label).to.have.text('Email address')   // just remembering that 'contain' is a partial assertion, if you need exact match assertion, you should you use 'have.text' like this.
    })

    // 3. Another example we used invoke to get the text
    cy.get('[for="exampleInputEmail1"]').invoke('text').then( emailLabel => {   // Here we are first getting the selector of the Email address label, to invoke the text and then emailLabel try to make assertion with the 'expect' below.
        expect(emailLabel).to.equal('Email address')   // Since this 'expect' is already returning a text (selected and stored into 'emailLabel function') then 'have.text' WILL NOT WORK because property 'have.text' kind of querying the web element and checking if the web element have text but in our example text is already here so we just need to validate if this is the text that we are looking for.
        cy.wrap(emailLabel).should('equal', 'Email address') // text is already here so we just need to validate if this is the text that we are looking for.
    })

    // Important concept that you should know about assertion is how it retries the web element to pass successfully, for example.
    // When email address is not there yet, Cypress will trigger method .get() to retry one more time and retrieve this ID from the web page
    // to make sure that this element exists on the page available/visible/cickable and so on.
    // Cypress will try it until the timeout, so default timeout is 4four seconds so Cypress will wait up to four seconds doing its best as it can
    // to get this value that you are expecting.


})


//_____________________________________________________32. TIMEOUTS, SECTION 4:
// How Cypress waits for we elements and how to configure it.
// (You can configure in 2 levels, in framework level or command level)


it.only('Timeouts', () => {
    cy.contains('Modal & Overlays').click()
    cy.contains('Dialog').click()

    cy.contains('Open with delay 10 seconds').click()
    cy.get('nb-dialog-container nb-card-header', {timeout: 11000}).should('have.text', 'Friendly reminder')  // In this manner we are changing/configuring the Cypress`s default wait timeout in command level. You need to pass the flag to change the wait in the action method, not in th assertion method.
})