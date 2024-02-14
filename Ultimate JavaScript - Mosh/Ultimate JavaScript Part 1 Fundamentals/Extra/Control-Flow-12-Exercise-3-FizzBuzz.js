/*
FizzBuzz Exercise
For every number that is divisible by 3 and 5, return "FizzBuzz".
For every number that is divisible by only 3 and not 5, return "Fizz".
For every number that is divisible by only 5 and not 3, return"Buzz".
*/

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input){

// Use typeof to validate data type of input value   
// Note: 4 days ago — The typeof operator returns a string indicating the type of the unevaluated operand. 
//if input data type is not a number => NAN
if(typeof input != 'number') return NaN;

if(input %3 === 0 && input %5 === 0) return 'FizzBuzz'

// Use modulo arithemic perator to produce remainder of an integer division
// If remainder is 0, input value is divisible 3 => 'Fizz'

if(input % 3 === 0)return 'Fizz';

// If input is divisible by 5 => 'Buzz'
if (input % 5 === 0) return 'Buzz';

// If above input is not divisible by 3 or 5 => input 
else return input;
}
