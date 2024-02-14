const first = [1,2,3];
const second = [4,5,6];

const combined = [...first, ...second];
combined
//combine all elements of 1st and 2nd array using ES6 spread operator
//declaring a new array and adding individual elements of 1st and 2nd array

console.log(combined); //expected output: [1,2,3,4,5,6]
//with spread operator, elements can be added to middle or end of array 

const combinded2  =  [...first, 'a', 'b', ...second];
console.log(combinded2);//expected output [a,b,c,'a', 'b',4,5,6]
