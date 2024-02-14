
//array w/2 elements that are objects
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