//objects are relative types
//put multi related variable in a objects
//object literal notation
//key are properties of objects, name and age are keys
let person = {
    name: 'Astra',
    age: 38
}

// change name value to 'Star'
// dot notation
// person.name = 'Star';
// bracket notation
// person['name'] = 'Love';
// console.log(person.name);

// cases when name of target property  is unknown until the run time
// selection variable determines name of target property user is selecting
// access property using bracket notation in a dynamic way
let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);//expected output: Mary