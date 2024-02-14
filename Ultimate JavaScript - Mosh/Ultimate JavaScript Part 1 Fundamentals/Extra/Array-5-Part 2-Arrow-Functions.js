
/*

array w/2 elements that are objects
const courses = [

    {id: 1, name: 'a'},
    {id: 2, name: 'b'},

];

//predicate function passed through the find method

const course = courses.find(function(course) {
    //if name not strictly === to string, returns undefined
    //if object in courses array has value of ==='a', return object
    return course.name === 'a';//expected output: {id: 1, name:'a'}
});


console.log(course);

-Use ES6 Arrow Funciton Syntax
-When you want to pass a function as a callback function or argument, you can use the arrow method
-Remove the function keyword, course,find(course)
-seperate the parameters from its body, use => between them
-if function has a single parament, remove ()
-if function is a signle line of code and returning a value, all code can go on one line...
-remove return keyword and curley braces

*/

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

const course = courses.find(course => course.name === 'a');
console.log(course);

//output: { id: 1, name: 'a' } ​​​​​at ​​​course​​​ ​Array-5-Part 1-Arrow-Functions.js:39:0​

