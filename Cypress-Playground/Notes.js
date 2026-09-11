/*

    VIDEO 42, SEÇÃO 5:

    Apenas com essa lógica para passar para o proximo mês: 

            cy.get('nb-calendar-view-mode').invoke('text').then(calendarMonthAndYear => { // Here we are getting the calendar current month and year when it's open and invoking it's text then holding in a variable called calendarMonthAndYear so we can use later
                if(!calendarMonthAndYear.includes(futureMonthLong) || !calendarMonthAndYear.includes(futureYear)){ // if calendarMonthAndYear DOES NOT(!) include futureMonthLong OR(||) calendarMonthAndYear DOES NOT(!) includes futureYear...
                    cy.get('[data-name="chevron-right"]').click() // ... Then i want to click on the button to go to next month
                }
            })

    Nao é o suficiente pois aqui ele irá pular apenas 1 mês, apenas para o mês seguinte,
    precisamos implemntar outra lógica de loop aqui, no Cypress nao podemos crir um
    loop while para rodar esse loop ate a condicao (que no caso sao os dias a mais que queremos do dia atual)
    seja satisfeita portanto no Cypress usamos o workaround de usar uma funcao recursiva
    do JavaScript, é um tipo de funcao que chama ela mesmo/própria.



    //_____________________________________________________46. What is Page Objects, Seção 6:
    do JavaScript, é um tipo de funcao que chama ela mesmo/própria.



    //_____________________________________________________46. What is Page Objects, Seção 6:
        So, Page Objects model is a high level difinition for this concept, it is a design pattern used in test automation to organize source code,
    improve maintainability and reusability of the code.
        So, it is a kind a very high level concept. And the core idea is that with Page Objects you take the repetitive parts of your code, put them
    into the function or methods, and then instead of calling the steps directly, you call the method that implemented those steps.
        So that way you redoce the number of lines of code in your projects, improve reusability because you don't need to copy paste the code anymore
    and maintainability as well.
        When you need to update your tests, you just update the implementation ofthe method intead of implementation in every single test.

        CORE CONCEPT:
        Every oage of the web application has own "class" with a methods/functions responsible for operations on this page.

        There are no right or wrongs about the Page Objects.
        It's just a matter of preference and kind of what makes sense in the context of the project.




    //_____________________________________________________47. FIRST Page Objects, Seção 6:


    1. the default to structure to create a Page objects folder is beloew the Cypress`s root project folder

    2. create the "page-objects" folder

    3. classes names always begins with capital case(Letra mai[uscula])




    //_____________________________________________________51. CUSTOM COMMANDS, Seção 6:


    custom commands has some limitation:

    1. custom commands is invisible for intelisense (that tooltip showing infos about a command, method etc...)
    2. also we cannot navigate directly to this custom command from the test file (command + click) to find the implementation of the custom command

    There is a workaround for these "both" issues but it doesn't fullfill completely which is:
        1. you create a file called: index.d.ts inside/below support folder
        2.

            declare namespace Cypress {
                interface Chainable {
                    // Method anotation start
                    * 
                    * Command to open homepage application
                    * 
                    // Method anotation end
        openHomePage(): Chainable<void>
                }
            }
    
    But you still can go direct to custom command implementation file.


    //_____________________________________________________52.  ,Seção 7:

    Cypress Mocking has advantages because it didn`t need to wait server`s response so you gain a lot of testing speed, the tests
    never hits the server itself.
    This trick is very useful when you need to test, for example, some edge cases, or you need to set up some complex test data
    which is difficult to set uo but instead you can mock in Cypress

    But there is some disadvantage with these types of testing because you tecnically is not making a full integration test in this
    case. If you mock everything for your web application you may miss some bu of a real integration issue when server actually
    process the data differently.

    



        
*/




