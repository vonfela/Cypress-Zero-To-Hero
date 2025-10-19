// Conditional statement
// is needed when you need to split the flow of your application based on the define the condition

//if(condition){
//   //execute some code here
//}
//    else { 
//    //execute some code
//}

// If hour between 6 and 12 print "Good Morning"
// If hour between 12 and 18 print "Good Afternoon"
// Otherwise: Good Evening

var hour = 6

if(hour >= 6 && hour < 12){
    console.log("Good Morning")
} 
else if (hour >= 12 && hour < 18){
    console.log("Good Afternoon")
}
else {
    console.log("Good Evening")
}




var ageIsMoreThanEighteen = true
var isUSCitizen = false

if(ageIsMoreThanEighteen && isUSCitizen){
    console.log("Customer is eligible for DL")
}
else {
    console.log("Customer is not eligible for DL")
}
