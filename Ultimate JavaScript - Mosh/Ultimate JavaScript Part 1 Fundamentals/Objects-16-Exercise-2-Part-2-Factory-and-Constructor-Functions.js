

let address = new Address('love', 'love city', '111111');
let address1 = new Address('a', 'b', 'c');


// Construtor Function, name is PascalCase

function Address(street, city, zipCode) {
    
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;

}

console.log(address);
console.log(address1)

/*
JavaScript This Keyword

In JavaScript, the thing called this is the object that "owns" the code.

The value of this, when used in an object, is the object itself.

In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

Note that this is not a variable. It is a keyword. You cannot change the value of this


*/