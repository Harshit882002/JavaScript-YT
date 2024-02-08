let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.getFullYear())
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getDay())
console.log(myDate.getTimezoneOffset())
console.log(myDate.getMilliseconds())
console.log(myDate.toLocaleString())
console.log(typeof(myDate))

let myCreateDate = new Date(2023,1,25)
console.log(myCreateDate)

let myCreateDate1 = new Date(2023,0,25,7,10)
console.log(myCreateDate1.toLocaleString())

let myCreateDate2 = new Date("2024-01-15")
console.log(myCreateDate2.toLocaleString())

let myCreateDate3 = new Date("09-13-2023")
let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreateDate3.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDate())
console.log(newDate.toLocaleString('default', {
    weekday:"long"
}))
