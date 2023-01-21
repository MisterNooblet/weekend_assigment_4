function tribonacchi(arr , iterations) {
   let result = Array.from(arr);
   for(let i = 0; i< iterations - 3; i++){result.push(result[i] + result[i+1] + result[i+2])}
   return result;
}