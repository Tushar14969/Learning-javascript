// let v1 = 2
// let v2 = "2"

// if(typeof v1 == typeof v2){
//     console.log("Inside loop");
//     console.log(`${typeof v1} ${typeof v2}`);
// }
// else{
//     console.log("outside loop");
// }

// falsy values
// 0, -0, BigInt 0n, "", '', undefined, null, false, NaN

// truthy values
// "0", " ", 'false', [], {}, function(){}

// let arr = [1,5,8,7,"tus",false]
// forof loop
// for (const i of arr) {
//     console.log(i);
// }
// here i means the values of array arr

// map is a data structure which stores the data as key value pair
let map = new Map()
map.set('one',1)
map.set('two',2)
map.set('three',3)
map.set('four',4)
map.set('five',5)

for (const [key, value] of map) {
    // console.log(`${key} ${value}`);
}