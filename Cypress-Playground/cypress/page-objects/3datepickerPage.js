    function selectDateFromCurrentDay(day){
        let date = new Date()
        date.setDate(date.getDate() + day)
        let futureDay = date.getDate()
        let futureMonthLong = date.toLocaleDateString('en-US', { month: 'long'}) // Here we are hold the long format for the opened calendar
        let futureMonthShort = date.toLocaleDateString('en-US', { month: 'short'}) // same but for the short format for when the date ir alredy selected and the calendar is closed.
        let futureYear = date.getFullYear() // Here we are creating and variable to hold the year using a javascvript object getFullYear
        let dateToAssert = `${futureMonthShort} ${futureDay}, ${futureYear}`

        cy.get('nb-calendar-view-mode').invoke('text').then(calendarMonthAndYear => { // Here we are getting the calendar current month and year when it's open and invoking it's text then holding in a variable called calendarMonthAndYear so we can use later
            if(!calendarMonthAndYear.includes(futureMonthLong) || !calendarMonthAndYear.includes(futureYear)){ // if calendarMonthAndYear DOES NOT(!) include futureMonthLong OR(||) calendarMonthAndYear DOES NOT(!) includes futureYear...
                cy.get('[data-name="chevron-right"]').click() // ... Then i want to click on the button to go to next month
                selectDateFromCurrentDay(day) // This is why this is a recursive function, why it calls itself, because it can self call after to loop into the logic/algorithm, to repeat until the condition is satisfied
            }
            else {
                cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()       
            }
        })
        return dateToAssert
    }




class DatepickerPage{
    
    selectCommonDatepickerDateFromToday(numberOfDaysFromToday){
        cy.get('[placeholder="Form Picker"]').then(input => { // Here we found the element of the datepicker .then store it in a variable to...
            cy.wrap(input).click() // ... Re-use here with the .wrap method, and now we just click on the calendar that we stored above
            const dateToAssert = selectDateFromCurrentDay(200)
            cy.wrap(input).should('have.value', dateToAssert)
        })
    }

    selectRangePickerDateFromToday(numberOfDaysFromTodayStart, numberOfDaysFromTodayEnd){
        cy.get('[placeholder="Range Picker"]').then(input => { // Here we found the element of the datepicker .then store it in a variable to...
            cy.wrap(input).click() // ... Re-use here with the .wrap method, and now we just click on the calendar that we stored above
            const dateToAssertStart = selectDateFromCurrentDay(numberOfDaysFromTodayStart)
            const dateToAssertEnd = selectDateFromCurrentDay(numberOfDaysFromTodayEnd)
            const finalDate = `${dateToAssertStart} - ${dateToAssertEnd}`
            cy.wrap(input).should('have.value', finalDate)
        })
    }

}




export const onDatepickerPage = new DatepickerPage()