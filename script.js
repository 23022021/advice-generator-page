let num = document.querySelector(".advice-Num")
let advice = document.querySelector(".advice-Text");

let submitBut = document.querySelector("#dice-box")

// let adviceGenerator = ("https://api.adviceslip.com/advice");
submitBut.addEventListener("click" , getAdvice);

async function getAdvice(){
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    num.innerHTML = "ADVICE #" + data.slip.id;
    advice.innerHTML = '"' + data.slip.advice + '"' ;
    
    console.log("work");
}


