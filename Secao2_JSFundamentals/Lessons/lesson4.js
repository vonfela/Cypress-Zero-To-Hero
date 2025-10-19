// Relational or comparison operators

// > - more than
// < - less than
// >= - more than equal
// <= - less than equal



var result = 10 > 5
console.log(result) //the result of relational operators, this is a logical operator, will be always a boolean


// Equaliy operators
// == - is equal than
// === - is different than

var x = 1
console.log(x == '1')  //lose comparison, checks only the value without the validation of data type, so the result is true because x(number) is equal to 1
console.log(x === '1') // strict comparison, validates data type also, so the result is false because x(number) is not equal to '1'(string) 