// console.log("Hello Tushar")
// let name = 'tushar'     // this is a string
// console.log(name);

// let newName = new String('tushar')      // this is a string object
// console.log(newName);
// same goes with other datatype objects like numbers, booleans

// arrays are always objects
let arr = [1,2,3,4,'hello',true,'t']
// console.log(typeof arr);
// merge multiple arrays
arr1 = ['another','array']
// arr2 = arr.concat(arr1)
// console.log(arr2);

// spread operator ...
arr2 = [...arr,...arr1]
// console.log(arr2);
let str = 'Hello, i am learning javascript.'
// console.log(str.indexOf('o'));
// console.log(str.substring(0,4));
// console.log(str.charCodeAt(0));

const obj = {
    Name:"Tushar",
    Age:23,
    Course:"MCA",
    Batch:2024,
    City:"Saharanpur",
    State:"Uttar Pradesh",
    Pin:247001
}
// singleton object
const obj1 = new Object({Name:"Tushar",
Age:23,
Course:"MCA",
Batch:2024,
City:"Saharanpur",
State:"Uttar Pradesh",
Pin:247001})
const o1 = {1:'one',2:'two'}
const o2 = {3:'three',4:'four'}
// merge two objects
// {} specifies that all the merged values are moving to {}
// Object.assign(o1,o2) means the merged values are moving to o1
// obj3 = Object.assign({},o1,o2)

// again spread operator ...
const o3 = {...o1,...o2}

// console.log(o3);
// console.log(`The keys are ${Object.keys(obj)}`);
// console.log(`The values are ${Object.values(obj)}`);
// console.log(Object.values(obj));
//

// destructuring of an object
// console.log(obj["Course"]);

// const so that the value cannot be changed
// {the property to fetch:alias} = object where the property exists
const {Age:a} = obj
// console.log(a);
//  function add(a , b) {
//     return a + b;
//  }
// to avoid the below case one should mention authentication
//  console.log(add(2 , 5))
// if we call the function without arguments then unddefined will be returned
// to avoid this
function add(a = 0 , b = 0) {
    return a + b;
 }
//  console.log(add())

//  when we don't know how many values we have to pass then we can use rest operator

function infiniteArguments(...arguments){
    return arguments;
}

// console.log(infiniteArguments(1,2,3,4,5,6,'yugd',true))


// variables can hold functions
// const area = function(length , breadth){
    // console.log(`Area is ${length * breadth}`)
// }

// console.log(area(6,4))

// this keyword only works with objects
// arrow function
const circle = (radius) => {
    return (Math.PI * radius ** 2)
}

// console.log(circle(7));

// basic syntax is () =>{}
// can hold this arrow function in a variable eg. const example = ()=>{}

// const print = (num) => num;
// console.log(print(8));

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// (function print(){console.log(`hello`)})();

// make it an arrow function
// ((name) => console.log(name))('tushar');
