
let one = document.getElementById("main");
let two = document.querySelector(".reset");
one.addEventListener("click",ttry);
two.addEventListener("click",reset);
let ID ;

let sec =0;
function ttry(){
    console.log("start");
    if(one.textContent=="Start"){
        console.log("true")
        ID = setInterval(start,10);
    one.textContent ="Stop";
    }
    else{
        if(one.textContent=="Stop"){
            console.log("false")
            clearInterval(ID);
        one.textContent ="Start";

    }
    
    }
}
function start(){
        sec++;
        document.getElementById("time").textContent = (sec/100).toFixed(2);
}
function reset(){
console.log("reset");
sec = 0;
document.getElementById("time").textContent = "---";
clearInterval(ID);
one.textContent ="Start";
}