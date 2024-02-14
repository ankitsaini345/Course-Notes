//Arrays-6-Removing Elements

const numbers = [1,2,3,4];


//remove element to end of array

const last = numbers.pop();
//pop methods returns the last element of the array
//console.log(numbers);//pop method changes the array, it changes the length of the array
//console.log(last)//returns [1,2,3]

//remove element at the beginning of an array
const first = numbers.shift();
//console.log(numbers);//returns [2,3]



//remove elements from middle of an array
//exercise, remove three elements from the array, start at the second index of array, include element in the second index

const numbers1 = [1,2,3,4,5,6,7,8,9];
const remove = numbers1.splice(2,3);

//should return [1,2,6,7,8,9]
console.log(numbers1);

//should return [3,4,5]
console.log(remove);