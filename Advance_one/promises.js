const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DataBase calls, cryptography, network
    setTimeout(() => {
        console.log("Async task is completed !");
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({ 
            username : "Harshit",
            email: "harshit0808@gmail.com"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function(){
        let error = false; // true
        if (!error) {
            resolve({
                username: "Harshit",
                password: "12345"
            })
        } else {
            reject("ERROR : Somthing went wrong")
        }
    },1000)
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {  // chaning
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is either resolved or rejected");
    })

    const promiseFive = new Promise((resolve, reject) => {
        setTimeout(function(){
            let error = false; // true
            if (!error) {
                resolve({
                    username: "JavaScript",
                    password: "54321"
                })
            } else {            
                reject("ERROR : JS went wrong ! ")
            }
        },1000)
    })

    const consumePromiseFive = async function(){
        try {
            const response = await promiseFive
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    consumePromiseFive()

const getAllUser = async function(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("ERROR: ", error)
    }
}
getAllUser()

// fetch('https://jsonplaceholder.typicode.com/users')
//  .then((response) => {
//     return response.json()
// })
//  .then((data) => {
//     console.log(data)
//  })
//  .catch((error) => console.log(error))
