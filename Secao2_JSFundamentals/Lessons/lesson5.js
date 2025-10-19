// Logical "AND", combine two or more logical expressions together
console.log(true && false) //ALL values have to be TRUE for expression to be TRUE

// Logical "OR"
console.log(true || false) //ANY value should be TRUE for the expression to be TRUE

var ageIsMoreThanEighteen = true
var isUSCitizen = false

var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriversLicense)

var eligibilityForDriversLicense = ageIsMoreThanEighteen || isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriversLicense)

// Logical "NOT", exclamation sign is a logical NOT operation, so is the opposite from the value which is inside (opposite of true)
console.log(!true)
console.log(6 !== 10)
