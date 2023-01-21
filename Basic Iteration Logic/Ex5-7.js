// Ex5.7 - shortest words 
// Simple, given a string of words, return the ​length​ of the shortest word(s). 
// String will never be empty and you do not need to account for different data types.

function shortestWord(str) {
    let test = [...str.split(' ')].reduce((acc,word) =>{
        if(acc.length > word.length){acc = word;}
        return acc;
    },);
    
    return test.length;
}

console.log(shortestWord('hello how are you hi'));