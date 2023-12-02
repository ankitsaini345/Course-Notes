
//array with four elements
const numbers = [1,2,3,4,];

//use indexOf to search for integer 1 in array numbers
//if 1 is not in array, indexOf returns a -1
console.log(numbers.indexOf(1))

//check if the following string is in array numbers: '1'
console.log(numbers.indexOf('1'))

//check when last time the integer 3 appeared in the array using lastIndexOf Method
//it appeares last at the 2nd index of array

console.log(numbers.lastIndexOf(3))

//return boolean value based on if integer not found in search
console.log(numbers.indexOf(1)!==-1)

console.log(numbers.includes(1))

//note, second argument for methods: the array at which search begins