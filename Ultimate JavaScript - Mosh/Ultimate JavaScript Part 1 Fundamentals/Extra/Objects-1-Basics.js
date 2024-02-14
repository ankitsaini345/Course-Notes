
/*
-Object-oriented programming is where a program has a collection of objects that talk to w/each other and perform some functionality
-Example: An application below for drawing diffrent shapes that uses a circle
-place the folloiwng highly related variables in an object:
-objects are collections of key value pairs, if you have properties highly related, you want to encapsulate them in an object
let radius = 1;
x = 1;
y = 2;
-
-object literal syntax
*/
const circle = {
    //note key value can be any type: string, boolen, function, array, object, etc.
    radius: 1,
    location: {
        x:1,
        y:2
    },
    
    isVisible: true,
    //function within object is called a method and has access to all properties within that object
    //function can operate on the variable radius, x, and y
    draw: function(){
        //for simplicity just logging a string
        console.log('draw');
    }
};
//using dot notiation, call function within the circle object
circle.draw();