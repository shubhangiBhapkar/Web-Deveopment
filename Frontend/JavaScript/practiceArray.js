// Write a JavaScript program to get the first n elements of an array. [n can be any
// positive number].
// For example: for array [7, 9, 0,-2] and n=3
// Print, [7, 9, 0]
let arr =[7, 9, 0,-2]
console.log(arr.slice(0,3))

// Write a JavaScript program to get the last n elements of an array. [n can be any
// positive number].
let n= 3
console.log(arr.slice(arr.length-n))

// Write a JavaScript program to check whether a string is blank or not
let str = prompt("enter a string:")
if(str.length == 0){
    console.log("string is blanck")
}else{
    console.log("string is not blanck")
}


// Write a JavaScript program to test whether the character at the given (character)
// index is lower case

let str1 = "hello";
let idx =3;
if(str1[idx] == str1[idx].toLowerCase()){
    console.log("lower case");
}else{
    console.log("not lower case");
}

// Write a JavaScript program to strip leading and trailing spaces from a string.
let str2 = "   bye  "
console.log(str2.trim())

