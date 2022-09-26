const container = document.querySelector(".container");
const text = document.getElementById("text");

let totalTime = 7500; // 7.5s
let breatheTime = (totalTime / 5) * 2; // 3s
let holdTime = totalTime / 5; // 1.5s

breatheAnimation();

function breatheAnimation() {
    console.log("start");
    text.innerHTML = "吸って！";
    container.className = "container grow";
    setTimeout(() => {
        text.innerHTML = "止めて！";

        setTimeout(() => {
            text.innerHTML = "吐いて！";
            container.className = "container shrink";
        }, holdTime); // 3s + 1.5s= 4.5sたったら始まる
    }, breatheTime); //3sたったら始まる
}

setInterval(breatheAnimation, totalTime);