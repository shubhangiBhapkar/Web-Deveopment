// 1
let num = 12445
if (num / 10 === 0) {
    console.log(num + " is Good Number")
} else {
    console.log(num + " is Bad Number")
}

// 2
let name = prompt("Enter ur name: ")
let age = prompt("Enter ur age: ")
let opt = `${name} ur ${age} years old`
alert(opt)

//3
let Ouarter = 3
switch (Ouarter) {
    case 1:
        console.log("January February March")
        break;
    case 2:
        console.log("April May June")
        break;
    case 3:
        console.log("July August Sepetember")
        break;
    case 4:
        console.log("Octomber November December")
        break;
    default:
        console.log("Envalid Quarter")

}

//4
let str = "Amazon"
if ((str[0] == 'A' || str[0] == 'a') && (str.length > 5)) {
    console.log("Golden String")
} else {
    console.log("Not Golden String")
}

//5
let a = 10
let b = 30
let c = 20
if (a > b) {
    if (a > c) {
        console.log(a + " is largest")
    } else {
        console.log(c + " is largest")
    }
} else {
    if (b > c) {
        console.log(b + " is largest")
    } else {
        console.log(c + " is largest")
    }
}

//6
let x = 32
let y = 47852
if((x % 10) === (y % 10)){
    console.log(x,y," have same last digit")
}else{
    console.log(x,y+" Don't have same last digit")
}