// for of loop :-
// [{}, {}, {}]

const arr = [1,2,3,4,5];

// for (const iterator of object) {
    
// }

for (const val of arr) {
    console.log(val);
}

const Hero = "Iron Man"

for (const hero of Hero) {
    console.log(`Each char is ${hero}`)
}

// Maps :- 

const map = new Map()
map.set('IN', "India");
map.set('USA', "United State of America")
map.set('FR', "France")
map.set('UAE', "United Arab Amirat")
map.set('AUS', "Australia")
map.set('IN', "India");

console.log(map)

for (const key of map) {
    console.log(key)
}

for (const [key, value] of map) {
    console.log(key, ':-', value)
}

const myObj = {
    js: 'javaScript',
    cpp: 'C++',
    rb: 'Ruby',
    py: 'python',
    swift: 'swift by app'
}

// for-in-loop

for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

const myARR = ["js", "rb", "py", "java", "cpp"]

for (const key in myARR) {
    // console.log(key)
    console.log(myARR[key])
}

console.log("-------------------------------")
 
// for (const key in map) {
//     console.log(key);
// } 
// Map are not itrable


// for-each-loop

const coding = ['js', 'ruby', 'java', 'paython', 'cpp']

coding.forEach(function(item) {
    console.log(item)
})

console.log("-------------------------------")

coding.forEach((item) => {
    console.log(item)
})

console.log("-------------------------------")

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

console.log("-------------------------------")

coding.forEach((item, index, arr)=> {
    console.log(item, index, arr)
})

console.log("-------------------------------")

const myCode = [
    {
        langName: "JavaScript",
        langFileName: "js"
    },
    {
        langName: "python",
        langFileName: "py"
    },
    {
        langName: "Ruby",
        langFileName: "rb"
    },
    {
        langName: "C++",
        langFileName: "cpp"
    }
]

myCode.forEach((item) => {
    console.log(item.langName) 
    console.log(item.langFileName)
})




