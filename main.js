let _hello = 3;
let $money = 10;
let myBirthDay = "04 dez";

const pi = 3.14;
/* old command
const score1 = document.getElementById();
const score2 = document.getElementsByClassName();
const score3 = document.getElementsByName();
const score4 = document.getElementsByTagName();
const score5 = document.getElementsByTagNameNS();
*/

// new command
//const score6 = document.querySelectorAll();
const score = document.querySelector('.score'),    // '#by_ID' 'tag' '.class'
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div'),
    car1 = document.createElement('div'),
    car2 = document.createElement("div")
;

car.classList.add('car');
car.classList.add('car1');
car.classList.add('car2');

const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

const setting = {
    start : false,
    score : 0,
    speed : 3
};

console.log(start);
console.log(score);
console.log(gameArea);

console.dir(score);

/* ald command
start.onclick = function () {
    start.classList.add('hide')
};
*/

function startGame() {
    start.classList.add('hide');
    setting.start = true;
    gameArea.appendChild(car);
    gameArea.appendChild(car1);
    gameArea.appendChild(car2);
    requestAnimationFrame(playGame);
};

start.addEventListener('click', startGame);


function playGame() {
    console.log('playGame');
    if (setting.start){  //  if (setting.start === true) равен  if (setting.start)
        requestAnimationFrame(playGame);
    }
}

function startRun(event) {
    event.preventDefault();
    // console.log(event.key);
    keys[event.key]= true;
}

document.addEventListener('keydown', startRun);

function stopRun(event) {
    event.preventDefault()
   // console.log(event.key)
    keys[event.key]= false;
}

document.addEventListener('keyup', stopRun);


