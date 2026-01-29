function arrayAverage(num){
    let avg;
    let sum = 0;
    for(let i=0;i<num.length;i++){
         sum =sum+ num[i] 
    }
    avg = sum/num.length
    return avg
}
let num = [2,3,4,5]
console.log(arrayAverage(num))

// Arraow function to check number is odd or even
let isEven = (n) =>{
    if(n % 2 === 0){
        return "even"
    }else{
        return "odd"
    }
}

console.log(isEven(2))

// predict op
const object = {
    message: "hello world",

    logMessage(){
        console.log(this.message)
    }
}
setTimeout(object.logMessage,1000)