// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a ="xyaabbbccccdefww"
// b ="xxxxyyyyabklmopq"
// longest(a, b) -> “abcdefklmopqwxy"
// a ="abcdefghijklimnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklimnopqrstuvwxyz"

function organizer(str1,str2) {
    let solution = str1.split('').concat(str2.split(''));
    solution.sort();
    return solution.filter((val,i)=> solution.indexOf(val) === i).join('')
}