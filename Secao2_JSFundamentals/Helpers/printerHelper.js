
export function printAge(age){
    console.log(age)
}

class CustomerDetails{
    
    printFirstName(firstName){
        console.log(firstName)
    }

    printLastName(lastName){
        console.log(lastName)
    }

}

export const customerDetails = new CustomerDetails() //instance of this class, now customerDetails becomes our object