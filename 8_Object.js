 // singletune 
 // Object.create(Cunstructor)
 
 // object literals

 const symbol = Symbol("key1")

 const user = {
    name: "Harshit",
    age: 21,
    "full name": "Harshit Chourasiya",
    city: "Bhopal",
    [symbol]: "mykey1",
    email: "harsht@gmail.com",
    isLogged: false,
    lastLogDay: ["Monday", "Sunday"]
 }


 console.log(user.email);
 console.log(user["email"]);
 console.log(user["full name"])
 console.log(user[symbol])

 user.email = "harshit123@gmail.com"
//  Object.freeze(user)
 user.email = "harshitCaptain@gmail.com"
 console.log(user)

 user.greeting = function(){
    console.log("Hello Bhai Log")
 }
 user.greeting1 = function(){
    console.log(`Jay Shree Ram !, ${this.name}`)
 }
 console.log(user.greeting())
 console.log(user.greeting1())