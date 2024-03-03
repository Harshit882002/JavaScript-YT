//------------------while-loop----------------

let index = 0;
while (index <= 10) {
    console.log(`Value of index is ${index}`);
    index = index + 2;
}

let arr = ['spider man', 'iron man', 'captain america', 'hulk', 'thor', 'dr. strange']
let myArr = 0;

while (myArr < arr.length) {
    console.log(`value is ${arr[myArr]}`);
    myArr = myArr + 1; 
}

//------------------do-while-loop-------------

// let score = 1;
let score = 11;

do {
    console.log(`Score is ${score}`);
    score++;
} while (score <= 10);