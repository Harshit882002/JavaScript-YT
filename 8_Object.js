 //--------------------------------Part-1----------------------------------------------------

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
 

//  console.log(user.email);
//  console.log(user["email"]);
//  console.log(user["full name"])
//  console.log(user[symbol])

 user.email = "harshit123@gmail.com"
//  Object.freeze(user)
 user.email = "harshitCaptain@gmail.com"
//  console.log(user)

 user.greeting = function(){
   //  console.log("Hello Bhai Log")
 }
 user.greeting1 = function(){
   //  console.log(`Jay Shree Ram !, ${this.name}`)
 }
//  console.log(user.greeting())
//  console.log(user.greeting1())

 //-----------------------------------------Part-2-------------------------------------------

//  const newUser = new Object() // single tune object
    const newUser = {} // non-single-tune object

    newUser.id = "123ABC"
    newUser.name = "Harshit"
    newUser.isLoggedIn = false

//  console.log(newUser)

 const newUser1 = {
   email: "harshit123@gmail.com",
   fullName: {
      userFullName: {
         firstName: "Harshit",
         lastName: "Chourasiya"
      }
   }
 }
//  console.log(newUser1.fullName?.userFullName)

 const obj1 = {
   name: "Harshita",
   age:21
 }
 const obj2 = {
   surname: "Sen",
   ageYear: "year old"
 }
//  const obj3 = {obj1, obj2}
//  const obj3 = Object.assign({},obj1, obj2)
 const obj3 = {...obj1, ...obj2}
//  console.log(obj3)

 const user1 = [
   {
      id:1,
      email:"randomuser@gmail.com"
   }
 ]
// user1[1].email
// console.log(newUser)
// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
// console.log(Object.entries(newUser))

// console.log(newUser.hasOwnProperty('isLoggedIn'));
  

//-----------------------------------------Part-3-------------------------------------------
// Destucturing

const course = {
   courseName: "JavaScript",
   price: "999",
   courseInstructor: "Hitesh Sir"
}

// course.courseInstructor
const {courseInstructor} = course // Destructring
// const {courseInstructor : instructure} = course // Destructring
console.log(courseInstructor)
// console.log(instructure)

// const navbar = ({company})  => {

// } 
// navbar(company = "Harshit")

// Json : 
// {
//    "name": "Harshit",
//    "courseName": "JavaScript",
//    "price": "Free"
// }

// Json:
// [
//    {},
//    {},
//    {}
// ]