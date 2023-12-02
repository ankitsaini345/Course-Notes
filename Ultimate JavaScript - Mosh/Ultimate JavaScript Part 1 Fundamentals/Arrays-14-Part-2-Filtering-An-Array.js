/*
const numbers = [ 1,-1,2,3 ];

//new array will not included negative numbers, if any are in the 
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//call back function three parameters: value, index and array

const filtered1 = numbers.filter(function(value){
    //if value is greater than or equal to zero
    return value >=0;
});
console.log(filtered1);
*/

//--------------Refactor Code
//make an arrow function, get rid of function keyword and add fat arrow
//() not needed because we have a single parameter
//since we're returning a value, we can excluded the return keyword & {}
//use aggregation, v for value, or n for number

const  numbers = [ 1, -2, 2, 3 ];
//store values in numbers array that are greater than zero in filtered2 varible
const filtered2 = numbers.filter(values => values >= 0);

console.log(filtered2); //expected output --> [ 1,2,3 ]
//note: numbers variable still has not changed
console.log(numbers);
