let input = document.querySelector("input")

input.addEventListener("input", function(){
    let para = document.querySelector("p");
    para.innerText = input.value;
   
}) 