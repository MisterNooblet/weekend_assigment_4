// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeat_str(num , str){
let result = ''
for( let i = 0; i < num; i++){
    result += str;
}
return result
}
