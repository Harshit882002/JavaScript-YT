// Immediately Invoked Function Expressions (IIFE)

// name IIFE
(function Data(){
    console.log(`DB Connected`)
})();

// IIFE => ()() 

// (() => {
//     console.log(`DB Connected Two`);
// })()

((name) => {
    console.log(`DB Connected Three ${name}`);
})('Harshit')