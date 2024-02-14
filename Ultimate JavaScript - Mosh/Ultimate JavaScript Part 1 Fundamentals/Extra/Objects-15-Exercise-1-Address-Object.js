//object with address of keys: street, city, zipcode

let address = {
    street: 'love',
    city: 'love city',
    zipcode: 111111    
};

/*
-Write a function that lists the key value pairs in the object address
-Use a fon in statement
-The for...in statement iterates over all enumerable properties of an object that are keyed by strings 
(ignoring ones keyed by Symbols), including inherited enumerable properties.
*/

function showAddress(address){
    for(let key in address) {
    //Another way to refer to a property is using square bracket notation:
    console.log(key, address[key]);
    }
}
console.log(showAddress(address));

//use brackets to access property in key 'street'

console.log(address['street']);
