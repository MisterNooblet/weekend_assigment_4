// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without otherjsmethods)

///Filter///Array
let filterArr = [1,76,555,32,75,97]
let filtered = []
for(let i = 0; i < filterArr.length; i++){
    if (filterArr[i] > 77) filtered.push(filterArr[i])
}

///ForEach///Array
let forEaArr = ['2',2,'ooooo',2,7,8]
for(let i = 0; i < forEaArr.length; i++){
    console.log(i);
}
///Map///Array
let mapArr= [ 6,5,4,32,2,65,3456,3245235,1241]
let mapped = []
for(let i = 0; i < mapArr.length; i++){
    mapped.push(mapArr[i]*2)
}

/////////////////////////////////////
///Filter///Object
let obj = {
    0: 77,
    1: 99,
    2: 2323,
    3: 324,
    4: 95,
}
    let objFiltered={}

for(let i = 0; i < Object.keys(obj).length; i++){
    if (obj[i] > 77) objFiltered[i] = obj[i]
}

///forEach///Object
for(let i = 0; i < Object.keys(obj).length; i++){
   console.log(obj[i]);
}

///Map///Object
let mappedObj = {}
for(let i = 0; i < Object.keys(obj).length; i++){
    mappedObj[i] = (obj[i]*2)
}
