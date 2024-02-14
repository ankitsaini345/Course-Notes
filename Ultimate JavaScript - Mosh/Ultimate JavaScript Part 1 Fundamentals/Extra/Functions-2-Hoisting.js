// Function walk() can be called before it is defined when function declaration syntax is used
// Call walk() function; output: string 'walking'

walk()

// Function declaration syntax

function walk() {
    console.log('walking');

 // Note: semicolor at the end of function declaration syntax
}

/* 

- Anonymous function expression
- Set the variable fun to reference the anonymous function 
- If we call the anonymous function before it is referenced, we get an error

*/
run();
let run = function() {
    console.log('speed runner');
};


