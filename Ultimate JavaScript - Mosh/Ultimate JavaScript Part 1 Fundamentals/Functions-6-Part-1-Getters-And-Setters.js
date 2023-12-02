//Functions: Getters and Setters 
//Part 1 0:00 - 3:06/5:39
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    //fuction w/in objects...later we want to write as a property????
    fullName() {
           return `${person.firstName} ${person.lastName}`;
    }
};
console.log(person.fullName());
/*
Notes: 

- adding a function inside an object, drop the function keyword
- fullName: function() {} becomes...
- fullName(){ } 

- issues: this is read only: person.fullName = "John Smith"
- read only meaning we cannot reset persons full name from the outside...
- treat fullName as a property instead of a method..
- drop () after fullName in console.log
- console.log(person.fullName()) becomes console.log(person.fullName);
..see part 2
*/