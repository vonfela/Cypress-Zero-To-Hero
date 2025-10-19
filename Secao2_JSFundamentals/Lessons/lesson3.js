// Object is an entity that can hold multiple values at the same time with key-value pairs.

// Object

var customer = {
    firstName: "Felipe", // key: value
    lastName: "Von", // key: value
    cars: ["Volvo", "Toyota", "Tesla"] //This is an array declared inside an Object
}
console.log(customer)
console.log(customer.firstName)
console.log(customer['lastName'])

// dot notation
customer.firstName = "Mike" // Here I'm changing the value firstName from customer from the code above
// Bracket notation
customer['lastName'] = "Silver"
//console.log(customer['lastName'])
console.log(`${customer.firstName} ${customer.lastName}`) 




// Arrays
// Is another type of the entity which is a list of items that you want to save and they are just placed inside of the array as an order

var car = ["Volvo", "Toyota", "Tesla"]  //index 0, 1 and 2
car[1] = "BMW" // Here I'm replacing the index value 1 from Toyota to BMW
console.log(car[1])
console.log(customer.cars[0])
