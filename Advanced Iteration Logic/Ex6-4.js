// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// islsogram("Dermatoglyphics") ==true
// islsogram("aba") ==false
// islsogram("moOse") ==false // -- ignore letter cas

function isIsogram(str) {
    let result = true;
    let strArray = [...str.toLowerCase()];
    strArray.forEach(element => {
        if (strArray.indexOf(element) != strArray.lastIndexOf(element)) result = false;
    });
    return result;
}