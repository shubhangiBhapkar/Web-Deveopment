
// write arrow function which return square of number
const square = (n) => (
    n*n
)
let n = prompt("Enter a number to find its square: ")
console.log(square(n))

// wriet arrow function which return hello world 5 times intraval of 2's

let id = setInterval(()=>{
    console.log("hellow world")
},2000)

setTimeout(() => {
    clearInterval(id)
},10000)