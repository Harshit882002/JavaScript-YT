const user = {
    username: "Harshit",
    price: 99,

    // this => current context
    welcomeMsg: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }

}

user.welcomeMsg()
user.username = "Harsh";
user.welcomeMsg()
// console.log(this)

// Browser ke ander jo Global object hai vah window object hai

function one(){
    console.log(this)
}
one()

const two = function(){
    let username = "Harshit"
    console.log(this.username)
}
two()

const three = () => {
    let username = "Harsh"
    console.log(this.username);
}
three()

// Arrow function
// () => {}

const addTwo = (num1, num2) =>  num1 + num2

console.log(addTwo(5, 4))

const addOtherTwo = (num1, num2) => (num1 + num2)

console.log(addOtherTwo(3,7))

const obj = (username) => ({
    username: "Harsh"
})
console.log(obj("harsh"))

const myArr = [2,3,5,6,9,4]

// myArr.forEach(function() = {})