let month =["january","july","march","august"]

console.log(month.shift())
console.log(month.shift())

console.log(month.unshift("june"))
console.log(month.unshift("july"))
console.log(month)

//using splice

let month2 =["january","july","march","august"]
month2.splice(0,2,"july","june")
console.log(month2)

// return index of javascript if it was reverse

let languages = ["c","c++","html","javascript","python","java","c#","sql"]
console.log(languages)
console.log(languages.reverse().indexOf("javascript"))