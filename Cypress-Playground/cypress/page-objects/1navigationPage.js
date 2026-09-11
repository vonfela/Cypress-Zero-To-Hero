// Functions outside the class on a PageObjects means that that action will be done without being seeing
// This is a function that checks if the menu is expanded or not, if not(false) then, click on it to let the Forms menu opened

// This is a CONDITIONAL OBJECT FUNCTION (VIDEO 48, SECAo 6)
function selectGroupMenuItem(groupItemName){                                           // function nameOfTheFunction(name of the argument that will hold an value, in this case will be the submenu that we want to click that will be set on the pageobject`s class NavegationPage below)
    cy.contains('a', groupItemName).invoke('attr', 'aria-expanded').then( attr => {     // cy.contains 'a' is the parent element for the Forms menu, the argument that will hold the submenu that we want, .invoke('atribute we want to use', 'in this case will be the expanded or not attribute').then(we hold the value of this attribute to check/validate below)
        if(attr.includes('false')){                                                    // Here we really do the validation: if the Forms menu is expanded or not using the invoked attribute value held on the attr variable that we created above on .then(), checking if the attribute value is false, if is false then the Forms menu is NOT expanded and if the value is true whicch is the contrary of false of course, the click will not beexecuted because the FOrms menu is already expanded
            cy.contains('a', groupItemName).click()                                    // And here we are finally doing the click to let the menu expanded after doing the validation above, looking for the parent 'a' element
        }
    })
}






class NavigationPage {
    
    formLayoutsPage() {
        //cy.contains('Forms').click()                      // This is the way to do if we didn`t have made the function above
        selectGroupMenuItem('Forms')                        // This is the new way after the function above
        cy.contains('Form Layouts').click()
    }

    datePickerPage(){
        //cy.contains('Forms').click()                      // This is the way to do if we didn`t have made the function above
        selectGroupMenuItem('Forms')
        cy.contains('Datepicker').click()
    }

    toasterPage(){
        //cy.contains('Modal & Overlays').click()          // This is the way to do if we didn`t have made the function above
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    tooltipPage(){
        //cy.contains('Modal & Overlays').click()          // This is the way to do if we didn`t have made the function above
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

}

export const navigateTo = new NavigationPage()             // to export this class we put the "export" at the beggining 
                                                           // After class was created I want to export the instance of this class so I can import this constant which is instance of our class in any spec file.