// Functions, are used to organize the code into reusable components

// Declarative function, can be invoked at any moment in time
helloOne() // this should be after the end of this function, but in this case, this function can be invoked at any moment in time
function helloOne(){
    console.log("Hello One!")
}


// Anonymous function, the difference between anonymous and declarative is this function simply doesn`t have the name
// another difference between anom and declarative functions is that declarative function can be called in the beginning of the file,
// even if the function declared in the file a little bit later on
var helloTwo = function(){
    console.log("Hello Two!")
}
helloTwo()



// ES6 function syntax or arrow function or just a simply an anom function using ES6 syntax
var helloThree = () => {
    console.log("Hello Three!")
}
helloThree()


// Function with argument
function printName(name, lastName){
    console.log(name + ' ' + lastName)
}
printName("John", "Smith")


// Function with return
function multiplyBytwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyBytwo(5)
console.log(myResult)





// Import function
import {printAge} from "../Helpers/printerHelper.js"
printAge(5)


// Import everything
import * as helper from "../Helpers/printerHelper.js"
helper.printAge(10)