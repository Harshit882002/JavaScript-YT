class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const harshit = new User("Harshit");
console.log(harshit.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("IPhone", "iPhone@gmail.com")
console.log(iPhone.logMe);