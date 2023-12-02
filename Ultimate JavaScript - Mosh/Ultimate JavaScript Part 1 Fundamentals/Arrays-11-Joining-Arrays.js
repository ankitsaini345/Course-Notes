//create URL Slugs

const mediumAccount = "www.medium/user/";

const firstName = "Astra";
const lastName = "Rai";

//join strings: firstName and lastName
const joinName = `${firstName}${lastName}`;

//expected ouput:AstraRai
console.log(joinName);

//convert uppercase letters to lowercase
const nameLowerCase = joinName.toLowerCase();
//expected output: astrarai

//conver string joinName to an array
//if an empty string ("") is used to as a seperator, the string is split between each character
//the split method is used to split a string into an array of substrings, and returns a new array
const stringToArray = nameLowerCase.split("");

//expected output: [ 'a', 's', 't', 'r', 'a', 'r', 'a', 'i' ]
console.log(stringToArray);

//convert array to a string with hypens between each character
const arrayWithHypens = stringToArray.join('-');

console.log(arrayWithHypens);




