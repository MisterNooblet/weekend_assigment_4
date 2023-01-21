// Ex5.1 - trimming string 
// It's pretty straightforward. Your goal is to create a function that removes the first and last 
// characters of a string. You're given one parameter, the original string. You don't have to worry 
// with strings with less than two characters.
function trim(str) {
let result = str.slice(1,str.length -1);
console.log(result);

}

trim('hello how are you')