// const coding = ['js', 'ruby', 'java', 'python', 'cpp', 'css', 'html']

// const value = coding.forEach((item) => {
//     console.log(item);
// })

// console.log(value);

//------------------Filters-------------------

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num) => num > 4)

const newNums = myNums.filter((num) => {
    return num > 4
})

console.log(newNums)

const newNums1 = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums1.push(num)
    }
})
console.log(newNums1)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter((book) => book.genre === 'History')

//    const userBooks1 = books.filter((book) => (book.publish >= 1995))

const userBooks1 = books.filter((book) => {    return book.publish >= 1995 && book.genre === 'History'
})

//   console.log(userBooks)
  console.log(userBooks1)

//----------------Map-------------------------


const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNum = myNumbers.map((num) => num + 10)
console.log(newNum)

// const newNum = myNumbers.map((num) => { return num + 10})
// console.log(newNum)

const newNum1 = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .map((num) => {return num + 100})
                .filter((num) => num >= 40)

    console.log(newNum1)


//- -------------------Reduse---------------  

const myNums1 = [1,2,3,4,5]

const myTotal = myNums1.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval} and sum: ${acc + currval}`)
    return acc + currval
}, 0)

console.log(myTotal)

const myTotal1 = myNums1.reduce((acc,currVal) => {
    return acc + currVal
}, 0)
console.log(myTotal)


const shopCart = [
    {
        itemName: "JS Course",
        price: 3999
    },
    {
        itemName: "React Course",
        price: 4999
    },
    {
        itemName: "Mobile Development Course",
        price: 8999
    },
    {
        itemName: "Java Course",
        price: 5999
    },
    {
        itemName: "MERN Stack Course",
        price: 20999
    }
]

const priceToPay = shopCart.reduce((acc, item) => {
    return acc + item.price;
},0)

console.log(priceToPay)