/// <reference types="cypress" />


// So in this first mock method we mock/intercept the whole request to modify the whole response with a fixture file and then
// send it back

it('54 first test', () => {  

    cy.intercept('GET', '**/tags', { fixture: 'tags.json' })
    cy.intercept('GET', '**/articles*', { fixture: 'articles.json' })
    cy.loginToApplication()

}) 

// in this method below, a better way would let our application complete the API request and then we catch/intercept the response on 
// the way back, modify just a single property and then sending back the entire response with just a single property modified so you
// can test this edge case. check below:

it('55 modify API response', () => { 
    cy.intercept('GET', '**/articles*', req => {
        req.continue( res => {
            res.body.articles[0].favoritesCount = '999999'
            res.send(res.body)
        })
    })
    cy.loginToApplication()
    cy.get('app-favorite-button').first().should('contain.text', '999999')
})


// We can you others router matcher if we want to make a more granulher matcher for the API request that is performed by your brwsert you can use a router matcher and usering
// a bunch of properties within this object more granularly

it('56 router matcher', () => {  

    cy.intercept({method: 'GET', pathname: 'tags'}, { fixture: 'tags.json' }) // just a different router matcher used to make the same test as the test on "it 54", but more granullar, according to cypress documentation
    cy.intercept('GET', '**/articles*', { fixture: 'articles.json' })
    cy.loginToApplication()

})

it.only('57 waiting for APIs', () => {
    cy.intercept('GET', '**/articles*').as('articleApiCall') // First we intercept the API call with the value that we need and store in/create an alias for it
    cy.loginToApplication()
    cy.wait('@articleApiCall').then( apiArticleObject => { // Then we wait for this alias with the value from the API to load properly
        console.log(apiArticleObject)
        expect(apiArticleObject.response.body.articles[0].title).to.contain('Bondar Academy') // This is just an example how you can also use the value waiting
    })
    //cy.get('app-article-list').should('contain.text', 'Bondar Academy') // This way is gonna work properly because of how 'should' behaves, retrying the elements/api value be available to proceed and complete the test
    cy.get('app-article-list').invoke('text').then( allArticleTexts => { // Here we are introducing the flakyness with the invoke method (we invoke all articles that contains the text Bondar Academy so will be a lot to load so it will take some time, and unlike 'should' method, it's not retrying for new text available because it's already got the text from this locator) to show that will not work because on the browser will show as "loading articles...". So what happens here is that Cypress already have the text value from the API but not the articles loaded so to overcome/resolve this we need to DYNAMICLY WAIT for API response
        expect(allArticleTexts).to.contain('Bondar Academy')
    })
})