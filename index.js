let h2 = document.getElementById("h2");
let btn = document.getElementById("btn");

btn.addEventListener("click" ,function(){
    if(h2.textContent == "Panha"){
        h2.textContent ="Huor"
    }else{
        h2.textContent ="Panha"
    }
} )