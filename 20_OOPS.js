const user = {
    username: "Harshit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from DataBase ! ")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    return this
}

const userTwo = new User("Tarun", 23, false)
const userOne = new User("Harshit", 22, true)

console.log(userOne)
console.log(userTwo)

