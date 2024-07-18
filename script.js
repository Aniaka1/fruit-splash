//background picture js code
const background = document.querySelectorAll(".fruitsplash-wrapper");
let activeBackground = 0;

//function for changing background postively
function increaseBackground(){
    background[activeBackground].className = "fruitsplash-wrapper";
    activeBackground++;
    if(activeBackground > 5){
        activeBackground = 0;
    }
    let currentBackground = background[activeBackground];
    currentBackground.classList.add(currentBackground.getAttribute("active-element"))
}

//function for changing background negatively
function decreaseBackground(){
    background[activeBackground].className = "fruitsplash-wrapper";
    activeBackground--;
    if(activeBackground < 0){
        activeBackground = 5;
    }
    currentBackground = background[activeBackground];
    currentBackground.classList.add(currentBackground.getAttribute("active-element"))
}

//dot changing js
const dots = document.querySelectorAll(".circle");
let activeDots = 0;

function increaseDots(){
    dots[activeDots].className = "circle";
    activeDots++;
    if(activeDots > 5){
        activeDots = 0;
    }
    currentDots = dots[activeDots];
    currentDots.classList.add(currentDots.getAttribute("color"))
}

function decreaseDots(){
    dots[activeDots].className = "circle";
    activeDots--;
    if(activeDots < 0){
        activeDots = 5;
    }
    currentDots = dots[activeDots];
    currentDots.classList.add(currentDots.getAttribute("color"))
}

//image display changing js
const imageDisplay = document.querySelectorAll(".fruitsplash-image-display");
let activeDisplay = 0;

function increaseDisplay(){
    imageDisplay[activeDisplay].className = "fruitsplash-image-display";
    activeDisplay++;
    if(activeDisplay > 5){
        activeDisplay = 0;
    }
    currentDisplay = imageDisplay[activeDisplay];
    currentDisplay.classList.add(currentDisplay.getAttribute("display-element"))
}

function decreaseDisplay(){
    imageDisplay[activeDisplay].className = "fruitsplash-image-display";
    activeDisplay--;
    if(activeDisplay < 0){
        activeDisplay = 5;
    }
    currentDisplay = imageDisplay[activeDisplay];
    currentDisplay.classList.add(currentDisplay.getAttribute("display-element"))
}

//waiting image js
const waitingImage = document.querySelectorAll(".fruitsplash-image-wait");
let activeWait = 0;

function increaseWait (){
    waitingImage[activeWait].className = "fruitsplash-image-wait";
    activeWait++;
    if(activeWait > 5){
        activeWait = 0;
    }
    currentWaitImage = waitingImage[activeWait];
    currentWaitImage.classList.add(currentWaitImage.getAttribute("wait-element"))
}

function decreaseWait(){
    waitingImage[activeWait].className = "fruitsplash-image-wait";
    activeWait--;
    if(activeWait < 0){
        activeWait = 5;
    }
    currentWaitImage = waitingImage[activeWait];
    currentWaitImage.classList.add(currentWaitImage.getAttribute("wait-element"))
}

//scroll click js code
const forwardClick = document.querySelector(".fruitsplash-dot-rightbtn");
const backwardClick = document.querySelector(".fruitsplash-dot-leftbtn");

forwardClick.onclick = ()=>{
    increaseBackground();
    increaseDots();
    increaseDisplay();
    increaseWait();
}

backwardClick.onclick = ()=>{
    decreaseBackground();
    decreaseDots();
    decreaseDisplay();
    decreaseWait();
}
