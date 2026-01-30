let key = document.querySelector("input")

key.addEventListener("keydown", function(event){
    console.log(event.code);

    if(event.code == "ArrowUp"){
        console.log("character will move upward")
    }
    else if(event.code =="ArrowLeft"){
        console.log("character will move left")
    }
    else if(event.code=="ArrowDown"){
        console.log("character will move downward")
    }
    else if(event.code=="ArrowRight"){
        console.log("character will move right")
    }
})