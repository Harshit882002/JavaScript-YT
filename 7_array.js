// ----------------------------------------------Array-part-2---------------------------------------------

const arr = [0,1,2,3,4,5 ]
console.log(arr)
console.log(arr[4])

const color = ["red", "blue", "yellow", "green"];
color[6] = "purple"
color.forEach((items, index) => {
    console.log(`${index}: ${items}`);
});

const arr1 = new Array(1,2,3,4,5)
console.log(arr1)

// Arrays Method

arr.push(6,7,8)
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(1)
console.log(arr)
arr.shift()
console.log(arr)
console.log(arr.includes(9))
console.log(arr.indexOf(5))


const newArr = arr.join();
console.log(arr)
console.log(typeof(newArr))

// slice, splice

console.log("A", arr)
const NewArr1 = arr.slice(1,3)
console.log(NewArr1);
console.log("B", arr)
const NewArr2 = arr.splice(1,3)
console.log("C", arr)
console.log(NewArr2)

// ---------------------------------------------Array-part-2----------------------------------------------

const Marval = ["Thor", "IronMan", "SpiderMan", "Hulk"];
const DC = ["SuperMan", "BatMan", "AquaMan", "Flash"];

Marval.push(DC);
console.log(Marval)

const Heros = Marval.concat(DC)
console.log(Heros)

const NewHeros = [...Marval, ...DC];
console.log(NewHeros)

const otherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const otherArr1 = otherArr.flat(Infinity)
console.log(otherArr1)

console.log(Array.isArray("Harshit"));
console.log(Array.from("Harshit"));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

 