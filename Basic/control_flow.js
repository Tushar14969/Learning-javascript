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

// objects can not be iterated with the help of forof loop

const obj = {
    1:'one',
    2:'two',
    3:'three',
    4:'four'
}

// iterating over an object
for (const key in obj) {
    // console.log(`${key} ${obj[key]}`);
}

let a = [1,2,3,4]
// in forin loop for(const key in array/object) key stores the indexes
for(value in a){
    // console.log(a[value]);
}

// maps cannot be iterated by forin loop
for(const i in map){
    // console.log(map[i]);
}

a.forEach(function (it){
    // console.log(it);
})

// we can also use arrow functions inside the parantheses
// callback functions don't have a name
// we can pass multiple parameters to the function like array index, values and an array itself
// forEach returns nothing
a.forEach((ite,index,a) => {
    // console.log(`square ${ite ** 2} index ${index} whole array ${a}`);
})

// array with objects as its elements

let objArray = [
    {
        Name:'Tushar',
        Course:'MCA',
        City:'Saharanpur'
    },

    {
        Name:'Tarun',
        Course:'BCA',
        City:'Lucknow'
    },

    {
        Name:'Kartik',
        Course:'BCA',
        City:'Deheradun'
    },

    {
        Name:'Akash',
        Course:'BBA',
        City:'Meerut'
    }
]

objArray.forEach((item) => {
    // console.log(item.City);
})

// filter returns the values

let n = a.filter( (i) => {
    return i >= 2
} )

// console.log(typeof n);
let nn = []
a.forEach( (it) => {
    if(it >= 2){
        nn.push(it)
    }
} )

// console.log(nn);

let mapArray = a.map( (i) => {
    return i * 10
} )

// console.log(mapArray);

// reduce method

let mobilePhones = [
    {
        Name:'Samsung',
        Price:15000
    },
    {
        Name:'Apple',
        Price:150000
    },
    {
        Name:'Vivo',
        Price:10000
    },
    {
        Name:'Realme',
        Price:8000
    },
    {
        Name:'Redme',
        Price:7000
    },
]

let deliveryCharge = 1000
let priceToPay = mobilePhones
        .filter( (Phones) => Phones.Price >= 10000 )
        .reduce( (accumulator, expensivePhones) => accumulator + expensivePhones.Price, deliveryCharge )
console.log(priceToPay);