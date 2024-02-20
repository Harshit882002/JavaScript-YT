//--------------------------------------------------function-part1---------------------------

function MyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
}
// MyName();

function addTwoNum(num1, num2){ // Para-meters
    let num3 = num1 + num2;
    console.log(num3)
}

addTwoNum(5,10); // Arguments
addTwoNum(3, "7");
addTwoNum(5, "a");
const result = addTwoNum(6,4);
console.log("Result : " , result )

function addTwoNumber(num1, num2){ // Para-meters
    // let result = num1 + num2;
    // return result;
    // console.log("Harshit")
    return num1 + num2;
}

const resultAgain = addTwoNumber(12,8)

console.log("Result: ", resultAgain)

function loginUserMsg(username = "Harsh"){ // default value
    if (!username) {
        console.log("Please Enter username");
        return;
    }
    return `${username} just-logged-in ! `
}
const logedUser = loginUserMsg("Harshit")
console.log(logedUser)
console.log(loginUserMsg())
// console.log(typeof(undefined))

//--------------------------------------------------function-part2---------------------------

// ... -> rest and spread oprator
function calculateCartPrice(...number1){

// function calculateCartPrice(val1, val2,...number1){

    return number1;
}
console.log(calculateCartPrice(200, 400, 600))

const user = {
    usernameUser: "Harshit",
    price: 199
}
function handleObj(anyObj){
  console.log(`Username is ${anyObj.usernameUser} and Price is ${anyObj.price}`);
}
handleObj(user);
handleObj({
    usernameUser: "Harsh",
    price: 299
})

const myNewArr = [100,200,300,400,500];

function secondaryVal(getArr){
    return getArr[2]
}
console.log(secondaryVal(myNewArr))
console.log(secondaryVal([100,200,300,400,500]));