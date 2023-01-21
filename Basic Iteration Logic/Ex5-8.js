// Ex5.8 - shortest words version 2 
// Given a string of words, return the longest word[s]. 
// String will never be empty and you do not need to account for different data types.

function longestWord(str) {
    let test = [...str.split(' ')].reduce((acc,word) =>{
        if(acc.length < word.length){acc = word;}
        return acc;
    },);
    
    return test;
}

