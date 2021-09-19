// Constructor this keyword?
// this is a concept of OOPS javascript 

// class Person 
let country = 'India'
const name = 'Amit'
class Person{

   
    constructor(firstName,lastName){
        console.log('I am a constructor')    
        this.firstName = 'Atul'
        this.lastName =  'Sharma'
    }
    displayInfo(){
        console.log(this.firstName)
        console.log(this.lastName)
    }

}

// object or instance of class person 
p1 = new Person()
p1.displayInfo()
console.log(country)

