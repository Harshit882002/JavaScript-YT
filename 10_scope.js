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

//-------------------------------part-2------------------

function one(){
    const username = "Harshit"

    function two(){
        const website = "YouTube"

        console.log(username)
    }
    // console.log(website)

    two()
}

one()

if(true){
    const username = "Harshit"
    if(username === "Harshit"){
        const website = "Github"
        console.log(`${username + website}`);
    }
}

// Intresting Concept

// function
function addone(num){
    return num + 1
}

console.log(addone(5))

// function / expression
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));
