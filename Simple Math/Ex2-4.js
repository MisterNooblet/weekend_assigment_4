// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) //=== 2
findUniq([ 0, 0, 0.55, 0, 0 ])// === 0.55
// It’s guaranteed that array contains at least 3 numbers.

function findUniq(arr) {
    let testArr = arr.sort((a , b) =>{return a - b;})
    return testArr.lastIndexOf(testArr[0]) > 0?testArr[testArr.length-1]:testArr[0];
}
