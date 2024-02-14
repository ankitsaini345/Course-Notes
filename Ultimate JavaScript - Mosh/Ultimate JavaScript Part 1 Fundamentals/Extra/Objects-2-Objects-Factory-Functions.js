/*
-  Factory functions
-  If objects have logic, use factory or constructor functions
-  Create Circle factory function produces objects
-  Factor function in any function which is not a class or constructor that returns a new object
-  Factory functions, the logic is defined in one place,if bug, there is a single place to modify
-  Function createCircle can be called with different values used to create different circle objects
-  draw() method defined in one place
-  Don't duplicate implementation of methods
*/

function createCircle(radius){
 return  {
    //key and value the same, remove value and use key, radius.: radius;
    radius,
    //note draw function does not  have function keyword
    draw() {
        console.log('drawing a circle');
        }
    };
}
//call factory function to create circle object
const circle1 = createCircle(3);
//log circle1 Object on the console
console.log(circle1)