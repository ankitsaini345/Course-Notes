
const numbers = [ 1,-1,2,3 ];

//new array will not included negative numbers, if any are in the 
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//call back function three parameters: value, index and array

const filtered = numbers.filter(function(value){
    //if value is greater than or equal to zero
    return value >=0;
});

console.log(filtered);