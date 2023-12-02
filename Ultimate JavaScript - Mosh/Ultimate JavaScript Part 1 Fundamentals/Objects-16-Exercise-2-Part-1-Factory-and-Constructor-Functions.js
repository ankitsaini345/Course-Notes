/*
Object with address of keys: street, city, zipcode using objeect literal syntax

    let address = {
        street: 'love',
        city: 'love city',
        zipcode: 111111    
};
*/

let address = createAddress('love','Love City', '111111');

console.log(address);

// if key and code are the same, object can me made cleanear by dropping the value
// street: street; is street, city: city; is city, etc.
// Factory Function

function createAddress(street, city, zipCode){

    return {
        street,
        city,
        zipCode
    };
}

