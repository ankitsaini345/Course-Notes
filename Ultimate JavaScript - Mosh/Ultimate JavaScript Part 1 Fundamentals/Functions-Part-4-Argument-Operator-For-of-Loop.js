

/*

Functions: arguments operator
Keys: index of arguments passed through function and value of element in array
*/
//function sum intergers passed as arguments through the functin sum
function sum() {
    //let total start at zero, 0
    let total = 0;
    for(let value of arguments)
        //add value added via interation of loop to the total variable
        total +=value;
        //return sum
    return total;
        //console.log(arguments);
}
//arguments passed as function parameters
console.log(sum(5,5,5,4,5));

/*
console.log(sum(1,2,3,4,5));
{ [Iterator]  
    0: 1, 
    1: 2, 
    2: 3, 
    3: 4, 
    4: 5, 
*/


/*
- part 1 - function that sums two integers

function sum(a,b){
    return a + b;
}

-Pass one argument | Output: a = 1, b by default = undefined
- Note: only one argument will output NaN b/c b is undefined
-console.log(sum(1));


- part 2 More Arguments Passed than Function Paraments
- calculation 1+ 2 = 3
- Note: 3,4,5 are not noted by JavaScript 
- console.log(sum(1,2,3,4,5));
*/