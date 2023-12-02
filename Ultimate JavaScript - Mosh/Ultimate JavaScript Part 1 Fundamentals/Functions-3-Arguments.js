
//function that will sum a varying number of parameters
function sum(){
 
    let total = 0;
    //for of loop can be used on any object that has an iterator
    //we are working through the arguments object, function parameters not required
    for(let value of arguments)
        total += value;
        return total;
}

console.log(sum(1,2,3,4,5));
//use for of loop to interate over the arguments object

/*
function sum(a,b){
    return a+ b;
}

- if you only enter one argument, number + undefined = not a number
- if you pass an argument numbers greater than number of function parameters, the first two acknowledge
- argument object, function w/varing number of parameters

*/




