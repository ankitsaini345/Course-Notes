//local and global variables

function greeting() {
  const message = 'hi';

}
console.log(greeting());

//greeting();

/*
- same local/global scope rules for other blocks of code, for example: loops, if statements, etc.
- you can have const/variables with the same name, bu within different function..
this is not best practice
- variables within block cannot be accessed outside of that block, if attempted, a reference error will display
*/