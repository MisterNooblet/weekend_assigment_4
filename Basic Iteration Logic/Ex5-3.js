// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


function toCamelCase(str) {
    let strArray = str.split('');
    let solution = '';
    solution += strArray[0];
    for(let i = 1; i < strArray.length; i = i){
        if(strArray[i] == '-' || strArray[i] == '_'){
            solution +=(strArray[i+1]).toUpperCase();
            i += 2;
        }else{
            solution +=(strArray[i])
            i++;
        }
    }
    return solution;
}

console.log(toCamelCase('hello-world_how_are-you')); 