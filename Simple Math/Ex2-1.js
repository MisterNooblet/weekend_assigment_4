// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

let arr = [10, 343445353, 3453445, 3453545353453];

function sum2low(arr) {
const strAndSort = arr.sort((a, b) => {return a - b;}).map((num) => num.toString());
let sum = (Number(strAndSort[0]) + Number(strAndSort[1]));
return sum;
}
console.log(sum2low(arr));