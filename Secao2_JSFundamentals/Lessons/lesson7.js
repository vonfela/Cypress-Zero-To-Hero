// Loops

// for(statement1; statement2; statement3){
// }

// Statement1 is our initial statement, what\how much we want to start our loop with;
// Statement2 will define the condition of how long do we want to run our loop and when we want to stop the loop, so this is a condition of stopping point for the loop to complete the execution
// Statement3 will define is what do we need to do after each cycle of the loop?

// for loop (for i loop)
for(var i=0; i<5; i=i+1 || i++){  // statement1; statement2; statement3
    console.log("Hello world!" + i)
}



// for of loop, this is a method do interate with the array during the execution of that array
// ES5 syntax
var cars = ["Volvo", "Toyota", "Tesla"]
for(let car of cars){     // The interator here is the 'car'
    console.log(car)
    if(car == "Toyota"){
        break                   //interupts my loop when reach to my target that is toyota
    }
}



// ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})