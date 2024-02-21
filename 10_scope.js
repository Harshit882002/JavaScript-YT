let a = 10;
const b = 20;
var c = 30;

var c1 = 100; // Global scope
// let c1 = 200;

let a1 = 200;

if(true){  // block scope
    let a1 = 1;
    const b1 = 2;
    var c1 = 3;
    console.log(a1)
}

console.log(a)
console.log(b)
console.log(c)

console.log(a1) 
// console.log(b1)
console.log(c1)