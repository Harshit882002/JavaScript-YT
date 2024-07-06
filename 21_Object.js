function multipleBy5(num){
    return num * 5
}

multipleBy5.power = 2

console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
tea.printMe()

// -----------------------prototype-----------

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.harshit = function(){
    console.log(`harshit is present in all objects`)
}

Array.prototype.heyHarshit = function(){
    console.log(`Harshit says hello`)
}

heroPower.harshit()
myHeros.harshit()
myHeros.heyHarshit()

//-----------Inheritence----------------------

const User = {
    name: 'Harshit',
    email: 'harshit08080@gmail.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailble: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode           "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"Harshit".trueLength()
"IceTea".trueLength()