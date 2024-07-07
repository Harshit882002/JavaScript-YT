class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }
      get email(){
        return this._email.toUpperCase()
      }
      set email(value){
        this._email = value
      }
      get password(){
        return `${this._password}harshit`
      }

      set password(value){
        this._password = value.toUpperCase()
      }
}

const harshit = new User("harshit@gmail.com", "abcde")
console.log(harshit)
console.log(harshit.password)
console.log(harshit.email)

//-----------------------------------------

function User(email,password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    })

    Object.defineProperty(this, 'email', {
         get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this.password = value
        }
    })
}

const chai = new User("chai@gmail.com", 'chai')
console.log(chai.email)
console.log(chai.password)