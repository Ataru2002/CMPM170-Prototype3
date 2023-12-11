import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My game";

let danger = 0;

document.title = gameName;

const box = document.createElement("img");
const button = document.createElement("img");
const jumpscare = document.createElement("img");
const text = document.createElement("p");
const score = document.createElement("h1");
const lineBreak1 = document.createElement("br");
const lineBreak2 = document.createElement("br");
const lineBreak3 = document.createElement("br");
const lose = new Audio("./src/assets/jumpscare.mp3");

button.src = `./src/assets/button.png`;
box.src = `./src/assets/box.png`;
jumpscare.src = `./src/assets/Jumpscare.jpg`;

text.innerHTML = `click me if you wanna see what's in the box!`;
score.innerHTML = `Your score: ${danger}`;

box.width = 250;
box.height = 250;
button.width = 50;
button.height = 50;
const scalePercentage = 150;
const newWidth = jumpscare.naturalWidth * (scalePercentage / 100);
const newHeight = jumpscare.naturalHeight * (scalePercentage / 100);

jumpscare.style.width = newWidth + 'px';
jumpscare.style.height = newHeight + 'px';

button.addEventListener("click", () => {
    danger++;
    score.innerHTML = `Your score: ${danger}`;
    if(Math.round(Math.random() * Math.max(1, (200 / danger))) == 0){
        const replacer: HTMLElement = document.getElementById("app")!;
        replacer.parentNode?.replaceChild(jumpscare, replacer);
        console.log(replacer);
        lose.play();
        const delayTime = 5000;
        setTimeout(() => {
            alert("You lose!");
            window.location.reload();
        }, delayTime);        
    }
});


app.append(score);
app.append(lineBreak1);
app.append(box);
app.append(lineBreak2);
app.append(button);
app.append(lineBreak3);
app.append(text);
