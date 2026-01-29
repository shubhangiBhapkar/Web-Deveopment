let res = [2,3,5,10,15].every((el)=>(el%2===0))
console.log(res)

// minimum number in array
let arr =[8,10,4,70,65,3]
let ans = arr.reduce((min,el)=>{
    if(min < el){
        return min
    }else{
        return el
    }
})
console.log(ans)