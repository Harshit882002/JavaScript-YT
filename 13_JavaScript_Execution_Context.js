// JavaScript Execution Context

// In the run of the code  javaScript is use the two phase to execute the program 

// {} => Global Execution Context (this)

// jab bhi hum javaScript ko koi bhi code dete hai to sabse phele Global Execution context (GEC) banta hai. aur jha bhi GEC banega vah usse ek varible this ko refer kar diya jata hai
 
// * Global Execution Context
// * Function / Functional Execution Context
// * Eval Execution Context

// jab humare pass ek javaScript ka code hota hai to ye 2 phases merun hota hai isme first humare pass memory creation phase / creation phase aur dusra execution phase hota hai.

// memory creation phase me hamare variable ya jo bhi humne declare kiya hai unke liye jagah allocate hoti hai

// aur dusre Execution phase me humare jo bhi Mathematically opration hote hai vah execute hote hai

let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)

// 1st step -> Global Execution aur ise sabse phele allocate kiya jata hai this ke ander 

// 2nd step -> Memory cration phase me sare variable ko ikkhtha kiya jata hai aur rakha jata hai
// val1 -> undefind
// val2 -> undefind
// addNum -> defination
// result1 -> undefind
// result2 -> undefind

// 3rd step -> Execution phase me sabse pahele
// val1 <- 10
// val2 <- 5
// addNum(line no 21 to 24 ) <- isme hume phele he defination hold kar de to isme kuch nahi hoga

// result1 <- isme humre pass addNum ek function hota hai yeh addNum apna ek alg execution context banata hai isme humre pass ek new variable enviroment + Execution thread banta hai. jitni bar bhi yeh function execute hote hai utni bar yeh create hota hai jise new executional context bolte hai isme sare varuiable ka ek alg se enviroment ka pura send box banya jata hai aur ek execution thered bh banya jata hai jab yeh send-box create hota hai to phir se memory cration aur execution phase hote hai aur vah addNum ke liye execute hoga jitni bar aap function liokhte hai

// new variable enviroment + Execution thread --> 1. Memory Cration phase:-
// val1 -> undefind
// val2 -> undefind
// total -> undefind
// 2. Executional context :-
// num1 -> 10
// num2 -> 5
// total -> 10 + 5 = 15 
// iske baad jo humare pass total value hai usse hum return kar dete hai Global execution context me
// jab yeh new executional context create hota hai vah create hone ke baad  Delete bhi hota hai. jab yeh delete ho jati hai to bapas se hum vahi aa jate hai
// result <- 15
// ab result2 me bhi bapas se ek function execute ho rha hai to bapas se phir se vah send-box create hoga aur phir se iske phi 2 phase ayenge --> 1. memory phase 2. execution phase aur bapas se vahi hoga
 