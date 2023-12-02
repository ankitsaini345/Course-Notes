//Functions: Getters and Setters 
//Part 1 0:00 - 3:06/5:39
const person = {
    
    firstName: 'Mosh',
    lastName: 'Hamedani',
    
    //fuction w/in objects...later we want to write as a property????
    //prefix method with 'get' keyword. now fullName is a getter...
    //now we can access fullName as if it is a property
    
    fullName() {
           return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {

        //split value by a pace, the split method with set value to an array
        //store array in const, name it parts
        const parts = value.split(' ');
        
        //String 'Astra Rai', is split, becomes an array
        // console.log(this.firstName) => 'Astra' , Oth element in array parts  
        
        //console.log(person.firstName) => 'Mosh'    
        this.firstName= parts[0];

        console.log(person.lastName) ; 
        
        //console.log(this.lastName) => 'Rai', 1st element in the array parts
        this.lastName= parts[1];
    }
};

//the value is the string on string on the right, 'Astra Rai', on the right side of the operator
person.fullName = 'Astra Rai';
//full name is store in parts variable then split into an array

//console.log(person);

/*
- getters => access properties in an object
- with getter, we can read the person.fullName like a property instead of a method
- setters => 
-  with the setter, we can set it from the outside
*/

