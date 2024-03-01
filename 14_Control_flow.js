
//------------ if-else statement--------------

if (true) {
    console.log('Hello Bhai')
}

if (false) {
    console.log('Kya hai Bhai')
}

const isUserLoggedIn = true
if (isUserLoggedIn) {
    console.log("Logged In")
}
// <, >, <=, >=, ==(compare), !=(not equal to) , === (Compare and check the tyep), !==

const temperature = 42;
if (temperature <= 50) {
    console.log("Temperature is less than 50")
} else {
    console.log("Temperature is greater than 50")
}

// const score = 200
// if (score > 100) {
//     let power = "Fly"
//     console.log(`User Power: ${power}`);
// }
// console.log(`User Power: ${power}`)

// const balance = 1000
// if (balance > 500) console.log("Test Pass"),console.log("Test2 Pass")

// const balance = 1000

// if (balance < 500) {
//     console.log("500")
// }else if (balance < 750) {
//     console.log("750")
// }else if(balance < 900){
//     console.log("900")
// }else{
//     console.log("1200")
// }

const userLoggedIn = true // false
const debitCard = true
const isStudent = false

if (userLoggedIn && debitCard ) {
    console.log("Allow to buy course");
}else{
    console.log("Not Allow to buy course")
}

if (userLoggedIn && debitCard || isStudent) {
    console.log("Allow to buy course");
}else{
    console.log("Not Allow to buy course")
}

// ---------------Switch Case-----------------


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 4

switch (month) {
    case 1:
        console.log("January")
        break;

    case 2:
        console.log("Febaury")
        break;

    case 3:
        console.log("Merch")
        break; 
    case 4:
        console.log("April")
        break;       

    default:
        console.log("Defult case Match")
        break;
}

const month1 = "Merch"

switch (month1) {
    case "January":
        console.log("January")
        break;

    case "Febaury":
        console.log("Febaury")
        break;

    case "Merch":
        console.log("Merch")
        break; 
    case "April":
        console.log("April")
        break;       

    default:
        console.log("Defult case Match")
        break;
}

//----------Truthy&Falsy-value----------------

const userEmail = "captain@gmail.com"
// const userEmail = ""
// const userEmail = []
// const userEmail = {}

if (userEmail) {
    console.log("Got user email")
}else{
    console.log("Don't have user email")
}

// falsy value :- 

// false, 0 , -0, BigInt(0n), "", null , undefined, NaN

// Truthy value :- 

// "String", true, [], {}, "0","false"," ", function(){}, 

// const arr = []
// if (arr.length === 0) {
//     console.log("Array is empty");
// }

// const obj = {}
// if (Object.keys(obj).length === 0) {
//     console.log("Object is empty");
// }


// false == 0 -> true
// false == '' -> true
// 0 == '' -> true


// Nullish Coalescing Oprator (??) :- null, undefind

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1)

// jab hum database se call karenge to directly hume inse response nhi milega blki 2 values milti hai to chances hai ke ya to null value aye ya phir response hee na aye undefind aye to uss case me pura code structure disturb ho sakta hai to uss cases ke liye Nullish Coalescing Oprator (??) ka use kiya jata hai jisse ke ager value null ho to null assign kar lo aur ager koi value aa rhi ho to value assign kar lo to uss spaical case ke liye Nullish Coalescing Oprator (??) ka use kiya jata hai.


// Terniary Oprator :- 

// condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80")




