

const numbers = [ 1,2,3 ];


//The forEach() method executes a provided function once for each array element.


/*
numbers.forEach(function(number) {
    console.log(number);
});
*/
//use arrow function and list index number pair w/index element for each element in the array
//this is an example of a 

numbers.forEach((number, index) =>console.log(index, number));


/*Notes on for each method:

Function to execute on each element. It accepts between one and three arguments:

currentValue
The current element being processed in the array.

index Optional
The index currentValue in the array.

array Optional
The array forEach() was called upon


*/