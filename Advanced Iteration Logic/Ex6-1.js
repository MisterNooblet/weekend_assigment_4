// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-VWw-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z anda. .z.

function accum(str) {
    if (str.length == 1) {return str.toUpperCase()};
    let solution= '';
        for(let i = 0; i < str.length; i++){
            if (i == 0) {solution += `-${str[i].toUpperCase()}`}
                for(let j = 0; j < i; j++){
                if (j == 0) {solution += `-${str[i].toUpperCase()}`}
                solution += str[i].toLowerCase();
                }
        }
return solution.slice(1);
}
