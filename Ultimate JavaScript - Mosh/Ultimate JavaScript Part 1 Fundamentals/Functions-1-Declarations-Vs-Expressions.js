
// Function Declaration

function walk() {
    console.log('walk');
}

// call walk function

walk();

// setting variable to reference a function is similar to setting variable to an object
// defined function that doesn't have a name = anonymous function expression
// function with a name is named function expression

let run = function() {

    console.log('speed runner');

};

// calling anonymous function by using its reference 
//run();
// variables move and run are both references the same anonymous function which is one object in memory

let move = run;
run();
move();