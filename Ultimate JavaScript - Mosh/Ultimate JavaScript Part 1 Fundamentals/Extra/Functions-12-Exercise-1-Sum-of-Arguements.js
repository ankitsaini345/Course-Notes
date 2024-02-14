
//Exercise: Create a Function Called Sum tat takees a varying number of arguments and sums them

//rest operator (...) allow us to represent an indefinite number of arguements as an array

function sum (...items){
  
/*
- reduce method: applies a function aganist an accumulatr and each element in the array, from left to right and give it a single value  
- accumulatr initial value 1, current value = 2 (1+ 2 = 3)
- accumulartor value 3 current value 3 (3 +3 = 6)
- accumulator value 6 current value 4
- accumulator value 10

*/
  
  return items.reduce((accumulator,currentValue) => accumulator + currentValue);

}

var output = sum(1,2,3,4);
console.log(output);